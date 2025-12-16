import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3010;
const BASE = `http://localhost:${PORT}`;

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForHttpOk(url, timeoutMs = 45_000) {
  const started = Date.now();
  // Node 22 has fetch.
  while (Date.now() - started < timeoutMs) {
    try {
      const res = await fetch(url, { redirect: "manual" });
      if (res.ok) return;
    } catch {
      // ignore
    }
    await wait(500);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function startDevServer() {
  const child = spawn(
    process.platform === "win32" ? "npm.cmd" : "npm",
    ["run", "dev", "--", "--port", String(PORT)],
    {
      stdio: "inherit",
      env: { ...process.env, PORT: String(PORT) },
    },
  );

  return child;
}

async function main() {
  // Ensure clean store for deterministic screenshot.
  await rm(path.join(process.cwd(), "data", "assets.json"), { force: true });

  const server = startDevServer();

  try {
    await waitForHttpOk(`${BASE}/assets`);

    const { chromium } = await import("playwright");

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(`${BASE}/assets`, { waitUntil: "networkidle" });

    const filePath = path.join(
      process.cwd(),
      "sample-data",
      "nmap-sample-20-hosts.txt",
    );

    await page.setInputFiles('input[name="nmapFile"]', filePath);
    await Promise.all([
      page.waitForURL((u) => u.toString().includes("/assets") && u.search.includes("imported="), {
        timeout: 30_000,
      }),
      page.click('button:has-text("Import")'),
    ]);

    await page.waitForSelector("table", { timeout: 30_000 });
    await page.waitForSelector("tbody tr", { timeout: 30_000 });

    const outDir = path.join(process.cwd(), "artifacts");
    await mkdir(outDir, { recursive: true });
    const screenshotPath = path.join(outDir, "assets-upload-result.png");

    await page.setViewportSize({ width: 1200, height: 800 });
    await page.screenshot({ path: screenshotPath, fullPage: true });

    await browser.close();

    console.log(`Saved screenshot: ${screenshotPath}`);
  } finally {
    server.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
