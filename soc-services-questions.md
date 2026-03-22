# Security Operations Centre (SOC) Services — Assessment Questions

**Level:** Senior (evaluating knowledge of best practices, strategic understanding, and capability to interpret technical details)

---

## Question 1: SOC Maturity and Incident Response Lifecycle

**A Security Operations Centre has been operational for two years but continues to experience a high volume of unresolved alerts and lengthy mean-time-to-respond (MTTR). Leadership asks you to recommend the single most impactful improvement. Which of the following should you prioritise?**

- **A)** Deploy an additional SIEM platform alongside the existing one to increase log ingestion capacity and ensure no events are missed.
- **B)** Implement a structured alert triage and escalation framework supported by SOAR-driven playbooks to reduce analyst fatigue and automate repetitive response actions.
- **C)** Increase the number of Tier-1 analysts on the SOC floor so that every incoming alert can be reviewed manually within the target SLA.
- **D)** Replace the existing threat intelligence feeds with a single premium commercial feed to improve the signal-to-noise ratio of detection rules.

### Correct Answer: **B**

### Justifications

| Option | Rationale |
|--------|-----------|
| **A — Incorrect** | Adding a second SIEM does not address the root cause of alert overload; it increases operational complexity and cost without improving triage efficiency. Gartner's SOC modernisation guidance explicitly warns against "tool sprawl" as a primary contributor to analyst burnout (Gartner, "How to Plan, Design and Implement an Effective SOC," 2024). |
| **B — Correct** | A structured triage framework combined with Security Orchestration, Automation and Response (SOAR) directly targets the two most common causes of high MTTR: inconsistent escalation processes and repetitive manual tasks. NIST SP 800-61 Rev. 2 ("Computer Security Incident Handling Guide") emphasises that formalised triage, categorisation, and prioritisation are foundational to reducing response times. SOAR playbooks codify best-practice response steps, ensuring consistency regardless of analyst experience level and freeing senior analysts for complex investigations. |
| **C — Incorrect** | Simply adding headcount without improving processes leads to linear cost growth and does not resolve the underlying inefficiency. The SANS 2023 SOC Survey found that SOCs reporting the best MTTR metrics relied on process maturity and automation rather than team size alone. Manual review of every alert is unsustainable at scale. |
| **D — Incorrect** | While threat intelligence quality matters, consolidating to a single feed actually reduces coverage diversity. MITRE ATT&CK recommends correlating multiple intelligence sources to achieve breadth across tactics, techniques, and procedures (TTPs). Changing feeds alone does not fix triage or response workflow deficiencies. |

### References

1. NIST SP 800-61 Rev. 2 — *Computer Security Incident Handling Guide* (National Institute of Standards and Technology, 2012). Section 3.2: Detection and Analysis.
2. Gartner — *How to Plan, Design and Implement an Effective Security Operations Center* (2024).
3. SANS Institute — *2023 SOC Survey: SOC Performance and Metrics* (2023).
4. MITRE ATT&CK — *Threat Intelligence Resources*, https://attack.mitre.org/resources/.

---

## Question 2: SOC Service Catalogue and Stakeholder Communication

**Your organisation is building a formal SOC service catalogue for the first time. The CISO asks you to define the primary purpose this catalogue should serve. Which statement best describes its core function?**

- **A)** It provides a detailed technical inventory of every security tool, appliance, and software version deployed within the SOC environment to assist with asset management.
- **B)** It documents the scope, boundaries, and expected outcomes of each SOC service offering so that internal stakeholders and customers have a clear understanding of what the SOC delivers, how to engage it, and what service levels to expect.
- **C)** It serves as the SOC's internal shift-handover document, recording which analysts are on duty, their assigned responsibilities, and the status of open incidents at each shift change.
- **D)** It functions as a compliance checklist mapping each regulatory requirement to the specific SOC analyst responsible for producing the corresponding audit evidence.

### Correct Answer: **B**

### Justifications

| Option | Rationale |
|--------|-----------|
| **A — Incorrect** | A tool and asset inventory is an important operational artefact, but it is maintained as part of configuration management or a CMDB — not the service catalogue. The service catalogue operates at the service-delivery level, not the infrastructure level. ITIL 4 distinguishes between a Configuration Management Database and a Service Catalogue as separate practices (AXELOS, "ITIL 4: Create, Deliver and Support," 2020). |
| **B — Correct** | A SOC service catalogue defines *what* the SOC offers (e.g., continuous monitoring, incident response, threat hunting, vulnerability management support), the scope and limitations of each service, engagement models, service-level targets (SLTs), and escalation paths. This transparency enables stakeholders to set realistic expectations and hold the SOC accountable against agreed metrics. The CREST SOC Buyer's Guide (2022) and the Carnegie Mellon SEI "Ten Strategies of a World-Class Cybersecurity Operations Center" (2nd ed.) both identify a well-defined service catalogue as a hallmark of SOC maturity. |
| **C — Incorrect** | Shift-handover documentation is an operational process artefact that supports continuity of operations. While important, it addresses internal SOC workflow rather than the strategic definition of service offerings. It would typically be governed under an operational procedures manual, not the service catalogue. |
| **D — Incorrect** | Compliance mapping is the role of a controls framework or a GRC (Governance, Risk, and Compliance) tool. Assigning individual analysts to regulatory requirements conflates operational roles with governance functions and does not scale. Frameworks like ISO 27001 Annex A and NIST CSF map controls to organisational functions, not individuals. |

### References

1. AXELOS — *ITIL 4: Create, Deliver and Support* (2020). Service Catalogue Management practice.
2. CREST — *SOC Buyer's Guide* (2022). https://www.crest-approved.org/.
3. Carson Zimmerman — *Ten Strategies of a World-Class Cybersecurity Operations Center*, 2nd Edition (MITRE / Carnegie Mellon SEI, 2014). Strategy 1: "Establish the SOC's Business Case and Service Catalogue."
4. ISO/IEC 27001:2022 — *Information Security Management Systems — Requirements*.

---

## Question 3: Measuring SOC Effectiveness

**The board requests a quarterly report demonstrating that the SOC is delivering value. You must choose the set of metrics that most meaningfully reflects SOC effectiveness. Which combination is most appropriate?**

- **A)** Total number of firewall rules deployed, number of vulnerability scans executed per month, and percentage of endpoints with up-to-date antivirus signatures.
- **B)** Mean-Time-to-Detect (MTTD), Mean-Time-to-Respond (MTTR), percentage of incidents closed within agreed SLA, and the ratio of true-positive to false-positive alerts.
- **C)** Number of SIEM log sources onboarded, total storage consumed by log archives, and average daily event-per-second (EPS) ingestion rate.
- **D)** Number of threat intelligence reports published internally, total hours spent on staff training, and count of new detection rules written per quarter.

### Correct Answer: **B**

### Justifications

| Option | Rationale |
|--------|-----------|
| **A — Incorrect** | These are infrastructure and hygiene metrics that belong to IT operations or vulnerability management reporting. They measure preventive control posture, not the SOC's detection-and-response capability. A board-level report focused on SOC value needs to demonstrate operational outcomes, not tool-level statistics. NIST CSF's "Respond" function focuses on response-related outcomes, not perimeter device configurations. |
| **B — Correct** | MTTD and MTTR are the industry-standard operational KPIs for evaluating detection and response effectiveness. SLA adherence shows service reliability, while the true-positive-to-false-positive ratio indicates detection quality — i.e., whether the SOC is spending its effort on real threats rather than noise. Together, these metrics address the questions a board cares about: "How quickly do we find threats? How quickly do we contain them? Are we meeting our commitments? Is our detection accurate?" The SANS SOC Metrics paper (2023) and the Forrester "Measuring Security Operations Effectiveness" report (2023) both endorse this combination as the baseline SOC effectiveness measurement. |
| **C — Incorrect** | Log source count and storage volume are capacity-planning indicators for the SIEM platform team. They describe data ingestion health but say nothing about whether the SOC is effectively detecting and responding to threats. High EPS does not equate to high effectiveness; it may even indicate an over-collection problem. |
| **D — Incorrect** | These are useful activity metrics for tracking SOC internal improvement (threat intel output, training investment, detection engineering productivity), but they measure effort and output, not outcome. A board needs to understand results — i.e., whether threats are being found and stopped — rather than how busy the team has been. The distinction between "activity metrics" and "outcome metrics" is central to the MITRE SOC Assessment framework. |

### References

1. NIST Cybersecurity Framework (CSF) v2.0 — *Respond (RS)* function and associated outcome metrics.
2. SANS Institute — *A Guide to SOC Metrics* (2023).
3. Forrester Research — *Measuring Security Operations Effectiveness* (2023).
4. MITRE — *11 Strategies of a World-Class Cybersecurity Operations Center*, Chapters on Metrics and Performance Management. https://www.mitre.org/publications.
5. Ponemon Institute — *Cost of a Data Breach Report* (2024) — uses MTTD and MTTR as primary incident lifecycle benchmarks.

---

## Summary Table

| Question | Topic | Correct Answer | Key Concept Tested |
|----------|-------|----------------|--------------------|
| 1 | Incident Response & SOC Maturity | B | Understanding that process maturity and automation outperform tool sprawl and headcount scaling |
| 2 | SOC Service Catalogue | B | Distinguishing strategic service definition from operational artefacts and compliance tools |
| 3 | SOC Effectiveness Metrics | B | Selecting outcome-based KPIs over activity, capacity, or infrastructure metrics for board reporting |
