# Digital Forensics and Incident Response (DFIR) — Assessment Questions

**Subject area:** Timely containment, recovery, and lessons learned
**Level:** Senior (evaluating knowledge of best practices, strategic understanding, and capability to interpret technical details)

---

## Question 1: Containment Strategy Selection

**Your incident response team has confirmed that an advanced threat actor has established persistence on multiple systems across two business-critical network segments. The attacker is actively exfiltrating data. You need to recommend a containment approach that balances speed with forensic integrity. Which of the following is the most appropriate course of action?**

- **A)** Immediately disconnect every compromised system from the network by physically unplugging cables and powering down all affected hosts so the attacker loses access and no further data can leave the environment.
- **B)** Implement network-level segmentation to isolate the affected segments from the rest of the environment while keeping compromised systems running, allowing the team to collect volatile forensic evidence before executing host-level containment actions.
- **C)** Focus exclusively on monitoring the attacker's activity for an extended observation period so the team can fully map every compromised asset before taking any containment action, ensuring nothing is missed.
- **D)** Immediately reimage all compromised systems from known-good backups to eliminate the threat actor's foothold and restore business operations as quickly as possible, then investigate using available log data afterwards.

### Correct Answer: **B**

### Justifications

| Option | Rationale |
|--------|-----------|
| **A — Incorrect** | Abruptly powering down systems destroys volatile evidence in memory (e.g., running processes, active network connections, encryption keys, and injected code) that is critical for root-cause analysis and attribution. NIST SP 800-86 ("Guide to Integrating Forensic Techniques into Incident Response") stresses the importance of preserving volatile data before it is lost. While network disconnection stops exfiltration, hard shutdowns should be a last resort because they eliminate the ability to perform live forensic acquisition. |
| **B — Correct** | Network-level segmentation (e.g., VLAN isolation, firewall rule changes, or SDN-based micro-segmentation) stops lateral movement and exfiltration while preserving the compromised hosts in their current state. This allows responders to capture volatile memory, active process listings, and network connection tables before executing further containment measures such as endpoint isolation or controlled shutdowns. NIST SP 800-61 Rev. 2 identifies this layered approach — containing the threat at the network boundary first, then collecting evidence, then performing host-level actions — as a best-practice containment sequence. The SANS Incident Handler's Handbook similarly recommends "contain first at the perimeter, then work inward." |
| **C — Incorrect** | Extended passive observation while active exfiltration is under way allows continued data loss and increases business impact. While understanding the full scope of compromise is important, it must be balanced against the duty to limit harm. NIST SP 800-61 Rev. 2 explicitly warns against delaying containment beyond what is necessary: "The longer an incident lasts, the more potential there is for damage and loss." Containment must be timely; scope mapping can continue within the isolated environment. |
| **D — Incorrect** | Reimaging before forensic acquisition permanently destroys disk-resident artefacts (e.g., malware binaries, persistence mechanisms, attacker tooling, and modified system files) needed to understand the attack vector, assess the full extent of compromise, and build indicators of compromise (IOCs). Without this evidence, the organisation cannot confirm it has identified all compromised systems, which risks incomplete eradication and reinfection. The CREST "Cyber Security Incident Response Guide" (2022) warns that premature remediation without adequate forensic analysis is a leading cause of incident recurrence. |

### References

1. NIST SP 800-61 Rev. 2 — *Computer Security Incident Handling Guide* (2012). Section 3.3: Containment, Eradication, and Recovery.
2. NIST SP 800-86 — *Guide to Integrating Forensic Techniques into Incident Response* (2006). Chapter 4: Volatile Data Collection.
3. SANS Institute — *Incident Handler's Handbook* (2012). Containment phase guidance.
4. CREST — *Cyber Security Incident Response Guide* (2022). https://www.crest-approved.org/.

---

## Question 2: Prioritising Recovery Sequencing

**After fully eradicating a ransomware infection that impacted 60% of the organisation's servers, the recovery team must bring systems back online. Multiple business units are demanding immediate restoration. Which approach best reflects incident response best practice for sequencing the recovery?**

- **A)** Restore all systems simultaneously using the most recent backups available to minimise total downtime and satisfy every business unit at once, then monitor for anomalies after everything is back online.
- **B)** Prioritise recovery based on a pre-established business impact analysis (BIA), restoring the most critical business functions first, verifying the integrity of each restored system against known-good baselines before reconnecting it to the production network, and monitoring closely for signs of reinfection at each stage.
- **C)** Allow each business unit to independently restore its own systems using whatever backup method it prefers, since the unit managers understand their own operational priorities better than the incident response team does.
- **D)** Delay all recovery activities until the forensic investigation is completely finished and a final incident report has been delivered to leadership, to ensure there is no risk of restoring a compromised component.

### Correct Answer: **B**

### Justifications

| Option | Rationale |
|--------|-----------|
| **A — Incorrect** | Restoring all systems simultaneously from the most recent backups is risky because the "most recent" backup may itself contain the attacker's persistence mechanisms or pre-encryption malware artefacts. Mass simultaneous restoration also overwhelms the monitoring capability, making it difficult to detect signs of reinfection. NIST SP 800-184 ("Guide for Cybersecurity Event Recovery") recommends a phased, prioritised restoration approach with validation at each stage. |
| **B — Correct** | A BIA-driven recovery sequence ensures the organisation restores the functions that matter most to business continuity first, while validation against known-good baselines (e.g., file integrity checks, hash comparisons, configuration audits) ensures that restored systems are clean. Phased reconnection allows the SOC and IR team to focus monitoring attention on a manageable number of returning systems at each step, catching any reinfection early. This approach is directly prescribed by NIST SP 800-184 and reinforced by ISO 22301 (Business Continuity Management), which requires organisations to define recovery priorities based on impact analysis. |
| **C — Incorrect** | Decentralised, uncoordinated recovery undermines the incident response team's ability to maintain control over the restoration process. Different teams may use inconsistent validation standards, restore from compromised backups, or reconnect systems before eradication is confirmed in their segment. NIST SP 800-61 Rev. 2 places recovery coordination firmly under the incident response team's authority to ensure consistency and prevent reinfection. |
| **D — Incorrect** | While forensic completeness is important, delaying all recovery until the investigation is entirely finished causes excessive business disruption and is unnecessary. Recovery and investigation can proceed in parallel once containment and eradication are confirmed for specific segments. NIST SP 800-61 Rev. 2 acknowledges that "recovery should begin as soon as possible" and that investigation activities can continue concurrently without requiring total operational standstill. |

### References

1. NIST SP 800-184 — *Guide for Cybersecurity Event Recovery* (2016). Section 3: Recovery Planning and Phased Execution.
2. NIST SP 800-61 Rev. 2 — *Computer Security Incident Handling Guide* (2012). Section 3.3.4: Recovery.
3. ISO 22301:2019 — *Business Continuity Management Systems — Requirements*. Clause 8.2: Business Impact Analysis.
4. SANS Institute — *Ransomware Recovery Best Practices* (2023).

---

## Question 3: Evidence Preservation During Containment

**During the containment phase of an incident involving a compromised web server, a junior analyst proposes immediately applying the latest security patches and restarting the server to close the vulnerability the attacker exploited. As the senior responder, what is the most appropriate guidance to provide?**

- **A)** Approve the patching and restart immediately because closing the vulnerability is the fastest way to prevent the attacker from re-entering through the same exploit vector, and speed is the top priority during containment.
- **B)** Instruct the analyst to first capture a forensic image of the server's disk and a full memory dump, document the current system state, and then proceed with patching and hardening only after the evidence has been securely preserved and the broader scope of compromise is understood.
- **C)** Advise the analyst to leave the server completely untouched and online in its compromised state until the forensic investigation is finished, regardless of how long that takes, because any change to the system could be challenged in legal proceedings.
- **D)** Direct the analyst to uninstall the web application entirely and rebuild the server from scratch right away, since patching alone cannot guarantee the attacker's backdoors have been removed and a fresh build is the only safe approach.

### Correct Answer: **B**

### Justifications

| Option | Rationale |
|--------|-----------|
| **A — Incorrect** | Patching before forensic acquisition overwrites or alters key artefacts on the file system (e.g., vulnerable binaries, configuration files, web shells) and triggers a restart that destroys volatile memory evidence. While closing the vulnerability is eventually necessary, doing so before evidence preservation violates the fundamental DFIR principle of "collect first, remediate second." NIST SP 800-86 establishes a clear order of operations: identify, collect, preserve, then proceed with containment remediation. |
| **B — Correct** | Forensic imaging and memory acquisition preserve the evidentiary record needed for root-cause analysis, indicator extraction, legal proceedings, and insurance claims. Once evidence is secured, the team can confidently patch, harden, and restore the system without concern for evidence loss. This sequencing aligns with the order of volatility principle (RFC 3227, "Guidelines for Evidence Collection and Archiving") which prioritises the most perishable data first. NIST SP 800-61 Rev. 2 similarly emphasises that evidence collection should precede system modification during containment. |
| **C — Incorrect** | Leaving a compromised server fully operational and exposed indefinitely creates ongoing risk of further exploitation, lateral movement, and data exfiltration. While evidence integrity is important, it does not require the system to remain in an actively vulnerable state. Network-level isolation can protect evidence while limiting risk. Courts and regulators evaluate whether evidence handling was "reasonable and proportionate," not whether the organisation accepted unlimited risk to avoid any system change (ACPO Good Practice Guide for Digital Evidence). |
| **D — Incorrect** | A full rebuild before any forensic acquisition destroys all disk-resident evidence. While rebuilding is often the correct final remediation step, it should only occur after forensic images have been taken. Without evidence, the team cannot determine what data was accessed, how the attacker entered, or whether additional systems are compromised. The CREST DFIR guide recommends treating evidence preservation as a prerequisite to any destructive remediation action. |

### References

1. NIST SP 800-86 — *Guide to Integrating Forensic Techniques into Incident Response* (2006). Evidence Collection and Preservation.
2. NIST SP 800-61 Rev. 2 — *Computer Security Incident Handling Guide* (2012). Section 3.2.4 and 3.3.1.
3. RFC 3227 — *Guidelines for Evidence Collection and Archiving* (IETF, 2002). Order of Volatility.
4. ACPO — *Good Practice Guide for Digital Evidence* (Association of Chief Police Officers, UK, 2012).
5. CREST — *Cyber Security Incident Response Guide* (2022).

---

## Question 4: Conducting an Effective Lessons-Learned Review

**Two weeks after successfully resolving a significant phishing-based business email compromise (BEC) incident, you are tasked with leading the lessons-learned review. Which approach will produce the most valuable and actionable outcomes?**

- **A)** Distribute a written questionnaire to all incident participants asking them to rate the response on a scale of 1 to 5 and submit general comments, then compile the scores into a summary report for leadership with the average ratings.
- **B)** Conduct a structured, facilitated post-incident review meeting that walks through the incident timeline, evaluates what worked well and what did not at each phase, identifies specific root causes using a documented methodology, and produces a prioritised improvement plan with assigned owners and deadlines.
- **C)** Have the incident commander write a narrative summary of the incident from memory, highlighting the key decisions made, and circulate it to the team for informational awareness without requesting input or follow-up actions.
- **D)** Focus the lessons-learned session exclusively on identifying which individual responders made mistakes during the incident so that targeted disciplinary action or retraining can be assigned to prevent the same errors from recurring.

### Correct Answer: **B**

### Justifications

| Option | Rationale |
|--------|-----------|
| **A — Incorrect** | Numerical ratings without structured discussion lack the depth needed to uncover root causes or produce actionable improvements. Questionnaires tend to generate superficial feedback and suffer from recency bias. NIST SP 800-61 Rev. 2 recommends interactive meetings where participants can discuss and debate findings, not passive surveys. A 1-to-5 scale tells leadership the team's sentiment but provides no roadmap for improvement. |
| **B — Correct** | A structured post-incident review (often called a "retrospective" or "after-action review") that follows the incident timeline ensures completeness and triggers detailed recall of decisions and actions at each phase. Evaluating both successes and failures provides balanced insight. Applying root-cause analysis techniques (e.g., the "5 Whys" or fishbone diagrams) moves the team from symptoms to underlying issues. Crucially, the output must include a prioritised improvement plan with owners and deadlines — otherwise findings remain observations rather than changes. NIST SP 800-61 Rev. 2 (Section 3.4), the SANS "Post-Incident Activity" phase guidance, and ISO 27035-2 all prescribe this structured, action-oriented approach. |
| **C — Incorrect** | A single-author narrative introduces bias (the commander's perspective only) and omits the experiences and observations of other responders who may have encountered different challenges. Without soliciting input or assigning follow-up actions, this approach produces documentation but not improvement. The value of lessons learned lies in identifying changes to make — not merely recording what happened. ISO 27035-2 specifically calls for multi-stakeholder participation in post-incident reviews. |
| **D — Incorrect** | A blame-focused review creates a punitive culture that discourages honest reporting and transparency in future incidents. Responders who fear blame will underreport mistakes, withhold observations, and avoid taking initiative — all of which degrade future response capability. The concept of a "blameless post-mortem" (widely adopted in SRE and incident management practice, as described in Google's *Site Reliability Engineering* book) focuses on systemic and process improvements rather than individual fault. NIST SP 800-61 Rev. 2 frames lessons learned as an organisational learning exercise, not a disciplinary process. |

### References

1. NIST SP 800-61 Rev. 2 — *Computer Security Incident Handling Guide* (2012). Section 3.4: Post-Incident Activity.
2. ISO/IEC 27035-2:2023 — *Information Security Incident Management — Part 2: Guidelines to Plan and Prepare for Incident Response*. Clause on Post-Incident Review.
3. SANS Institute — *Incident Handler's Handbook* (2012). Post-Incident Activity phase.
4. Beyer, Jones, Petoff & Murphy — *Site Reliability Engineering* (O'Reilly / Google, 2016). Chapter 15: Postmortem Culture: Learning from Failure.

---

## Question 5: Validating Eradication Before Recovery

**Following containment of a network intrusion where the attacker deployed a custom backdoor across multiple systems, the team is preparing to move from eradication to recovery. What is the most reliable way to confirm that eradication has been successful before restoring business operations?**

- **A)** Run a full scan with the organisation's existing endpoint antivirus solution on every affected system and confirm that no detections are reported, since a clean antivirus scan demonstrates the absence of malicious software.
- **B)** Verify eradication by cross-referencing the indicators of compromise (IOCs) extracted during the investigation against all systems in the environment, validate that identified persistence mechanisms have been removed, perform integrity checks on critical system files against known-good baselines, and confirm through network monitoring that no anomalous command-and-control traffic is observed over a defined observation period.
- **C)** Ask the original analyst who discovered the compromise to manually inspect each affected system and provide a verbal confirmation that the systems appear to be operating normally and no suspicious processes are visible.
- **D)** Confirm eradication by checking that the vulnerability used for initial access has been patched, since once the entry point is closed the attacker can no longer maintain access to the environment and all backdoors become inactive.

### Correct Answer: **B**

### Justifications

| Option | Rationale |
|--------|-----------|
| **A — Incorrect** | Standard antivirus solutions rely primarily on signature-based detection and may not detect custom or novel backdoors that lack known signatures. An attacker using bespoke tooling — which is common in targeted intrusions — can easily evade traditional AV. A clean AV scan provides a false sense of assurance and does not constitute thorough eradication verification. MITRE ATT&CK documents numerous techniques (e.g., T1027 — Obfuscated Files, T1036 — Masquerading) specifically designed to bypass signature-based detection. |
| **B — Correct** | Comprehensive eradication verification requires multiple complementary methods: IOC sweeps across the full environment ensure the known artefacts of the attack are no longer present; validating removal of persistence mechanisms (e.g., scheduled tasks, registry run keys, web shells, implanted services) ensures the attacker cannot regain access through previously established footholds; file integrity monitoring against known-good baselines detects unauthorised modifications; and a network monitoring observation period catches any residual command-and-control (C2) communications. This multi-layered approach is prescribed by NIST SP 800-61 Rev. 2 and aligns with the "defence in depth" verification principle recommended by CREST and SANS DFIR guidance. |
| **C — Incorrect** | Relying on a single analyst's visual inspection is subjective, unscalable, and non-repeatable. Sophisticated backdoors are designed to be invisible to casual observation — they may operate as legitimate-looking services, reside in memory only, or activate only at specific intervals. Eradication confirmation must be evidence-based and documented, not dependent on individual judgement. ISO 27035-2 requires that eradication be verified through documented technical procedures, not informal assessment. |
| **D — Incorrect** | Patching the initial entry point addresses only one element of the attack chain. Once an attacker has established persistence (e.g., additional backdoors, new user accounts, implanted SSH keys, scheduled tasks), closing the original vulnerability does not remove those footholds. The MITRE ATT&CK framework distinguishes clearly between "Initial Access" techniques and "Persistence" techniques — remediating the former does not negate the latter. NIST SP 800-61 Rev. 2 stresses that eradication must address all identified attacker artefacts, not only the initial vector. |

### References

1. NIST SP 800-61 Rev. 2 — *Computer Security Incident Handling Guide* (2012). Section 3.3.3: Eradication and Section 3.3.4: Recovery.
2. MITRE ATT&CK — *Persistence* and *Defence Evasion* tactic categories. https://attack.mitre.org/.
3. CREST — *Cyber Security Incident Response Guide* (2022). Eradication Verification.
4. ISO/IEC 27035-2:2023 — *Information Security Incident Management — Part 2*. Eradication and Recovery clauses.
5. SANS Institute — *Advanced Incident Response and Threat Hunting* course material (FOR508).

---

## Summary Table

| Question | Topic | Correct Answer | Key Concept Tested |
|----------|-------|----------------|--------------------|
| 1 | Containment Strategy Selection | B | Balancing timely containment with forensic evidence preservation through network-level isolation |
| 2 | Recovery Sequencing | B | BIA-driven, phased restoration with integrity validation versus rushed or uncoordinated recovery |
| 3 | Evidence Preservation During Containment | B | Ensuring forensic acquisition precedes remediation actions to maintain evidentiary integrity |
| 4 | Lessons-Learned Review | B | Structured, blameless, action-oriented post-incident review versus superficial or punitive approaches |
| 5 | Eradication Validation Before Recovery | B | Multi-layered verification of eradication using IOCs, integrity checks, and network monitoring |
