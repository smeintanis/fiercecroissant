"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { mergeAssets, readAssetsStore, writeAssetsStore } from "@/lib/assets-store";
import { parseNmapOutput } from "@/lib/nmap";

export async function importNmap(formData: FormData) {
  const file = formData.get("nmapFile");
  if (!(file instanceof File)) {
    redirect("/assets?error=missing_file");
  }

  const text = Buffer.from(await file.arrayBuffer()).toString("utf8");
  const incoming = parseNmapOutput(text);

  const existing = await readAssetsStore();
  const merged = mergeAssets(existing.assets, incoming);

  await writeAssetsStore({
    updatedAt: new Date().toISOString(),
    assets: merged,
  });

  revalidatePath("/assets");
  redirect(`/assets?imported=${incoming.length}`);
}

export async function clearAssets() {
  await writeAssetsStore({ updatedAt: null, assets: [] });
  revalidatePath("/assets");
  redirect("/assets?cleared=1");
}
