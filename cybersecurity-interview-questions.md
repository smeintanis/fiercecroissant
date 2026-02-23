# 50 Cybersecurity Interview Questions and Answers

Based on content from [WeCreateProblems](https://www.wecreateproblems.com/interview-questions/cybersecurity-interview-questions) and [TheCyberExpress](https://thecyberexpress.com/top-cybersecurity-interview-questions/).

---

## 1. What is cybersecurity and why is it important?

Cybersecurity is the practice of protecting data, servers, networks, and hardware from unauthorized access, attacks, theft, or damage. It is important because cyberattacks have become a major global threat, targeting industries like finance, information technology, banking, and insurance. Organizations rely on cybersecurity professionals to defend against data breaches, malware, and other forms of cybercrime that can result in financial loss, reputational damage, and regulatory penalties.

---

## 2. What is the CIA triad?

The CIA triad is a foundational model in cybersecurity representing three core principles:

- **Confidentiality** ensures that sensitive information is accessible only to authorized users and protected from unauthorized disclosure. Techniques like encryption, access controls, and authentication help maintain confidentiality.
- **Integrity** guarantees that data remains accurate, consistent, and unaltered during storage, transmission, or processing. Measures like hashing, digital signatures, and version control help ensure integrity.
- **Availability** ensures that systems, networks, and data are accessible to authorized users whenever needed. Redundancy, disaster recovery planning, backups, and resilient infrastructure contribute to availability.

The CIA triad provides a framework for designing, implementing, and evaluating security controls across an organization.

---

## 3. What is the difference between a threat, a vulnerability, and a risk?

- **Threat** refers to any person, organization, or entity with the potential to cause harm to an organization. Examples include hackers, natural disasters, and insider threats.
- **Vulnerability** refers to a weakness in a system, network, or process that could be exploited by a threat actor. Examples include unpatched software, weak passwords, and misconfigured firewalls.
- **Risk** refers to the probability that a threat will exploit a vulnerability and the potential damage that could result. Risk is assessed by combining the likelihood of exploitation with the severity of the impact.

---

## 4. What is cryptography?

Cryptography is the science of encoding data so that only authorized receivers can read it. It ensures secure communication by transforming plaintext into ciphertext using algorithms and keys. Cryptography underpins many security mechanisms, including encryption, digital signatures, hashing, and secure key exchange protocols. It prevents unauthorized third parties from intercepting or tampering with sensitive information during storage or transmission.

---

## 5. What is the difference between symmetric and asymmetric encryption?

- **Symmetric encryption** uses a single shared key for both encryption and decryption. It is fast and efficient but requires a secure method to exchange the key. Common algorithms include AES, DES, Blowfish, and RCx.
- **Asymmetric encryption** uses a pair of keys: a public key for encryption and a private key for decryption. It is more computationally expensive but eliminates the need for a shared secret. Common algorithms include RSA and ECC.

Symmetric encryption is typically used for bulk data encryption, while asymmetric encryption is used for key exchange, digital signatures, and securing communications.

---

## 6. What is the difference between hashing and encryption?

Encryption is a reversible process that converts plaintext into ciphertext using a key; the original data can be recovered with the correct decryption key. Hashing, on the other hand, is a one-way function that produces a fixed-length output (hash) from input data. Hashing cannot be reversed to recover the original data. Hashing is used for data integrity verification, password storage, and digital signatures, while encryption is used to protect data confidentiality during storage and transmission.

---

## 7. What is a firewall and how does it work?

A firewall is a network security device or software that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks such as the internet.

Firewalls can be classified into several types:
- **Packet filtering** firewalls inspect individual packets and allow or block them based on rules.
- **Stateful inspection** firewalls track the state of active connections and make decisions based on the context of traffic.
- **Proxy firewalls** act as intermediaries between users and the internet.
- **Next-Generation Firewalls (NGFW)** combine traditional firewall capabilities with additional features like deep packet inspection and intrusion prevention.

---

## 8. What are IDS and IPS, and how do they differ?

- **Intrusion Detection System (IDS)** monitors network traffic or system activities for suspicious behavior or policy violations. It generates alerts when potential threats are detected but does not actively block them. IDS can be network-based (NIDS) or host-based (HIDS).
- **Intrusion Prevention System (IPS)** detects and actively prevents malicious activities in real time. It operates inline with network traffic and can automatically drop malicious packets, reset connections, or quarantine affected systems.

Both use signature-based detection (matching known attack patterns) and anomaly-based detection (flagging unusual behavior), but IPS adds automated blocking capabilities on top of detection.

---

## 9. What is the difference between HIDS and NIDS?

HIDS (Host-based Intrusion Detection System) and NIDS (Network-based Intrusion Detection System) both protect against malware and unauthorized activity, but they differ in scope:

- **HIDS** is installed on a single host system and monitors activities specific to that machine, such as file changes, login attempts, and process activity.
- **NIDS** monitors traffic across an entire network segment, analyzing all packets flowing through to detect suspicious patterns.

HIDS is effective at detecting threats targeting individual systems, while NIDS provides broader visibility across network communications.

---

## 10. What is a VPN and why is it used?

A Virtual Private Network (VPN) creates secure, encrypted connections over less secure networks such as the internet. VPNs extend private network access to remote users by establishing an encrypted tunnel between the user's device and the VPN server. This protects against eavesdropping, tampering, and censorship. VPN tunneling protocols include PPTP, L2TP, and OpenVPN, each offering different levels of security and performance.

---

## 11. What is phishing and how can it be prevented?

Phishing is a social engineering attack where attackers send deceptive communications, typically emails, to trick recipients into revealing sensitive information such as passwords, credit card numbers, or personal data. Over 75% of targeted cyberattacks begin with email-based phishing.

Prevention strategies include:
- Implementing email filtering and anti-phishing tools
- Conducting regular cybersecurity awareness training
- Using multi-factor authentication (MFA) to limit the impact of stolen credentials
- Running phishing simulations to test and educate employees
- Verifying suspicious messages before clicking links or opening attachments

---

## 12. What is ransomware?

Ransomware is a type of malware that encrypts a victim's files or locks their system, demanding a ransom payment in exchange for the decryption key or restored access. Ransomware attacks target individuals, businesses, government agencies, and critical infrastructure, causing significant financial loss and operational disruption.

Prevention and mitigation include maintaining regular backups, keeping systems patched, deploying endpoint protection, segmenting networks, and having an incident response plan in place. Many ransomware outbreaks exploit unpatched software or phishing emails as the initial attack vector.

---

## 13. What is malware? Provide examples.

Malware (malicious software) is any software designed to harm, exploit, or compromise systems, networks, or data. Common types include:

- **Viruses** attach to legitimate programs and spread when the host file is executed.
- **Worms** self-replicate and spread across networks without user interaction.
- **Trojans** disguise themselves as legitimate software to gain access to systems.
- **Ransomware** encrypts data and demands payment for decryption.
- **Spyware** secretly monitors and collects user information.
- **Adware** delivers unwanted advertisements and may track user behavior.

Malware scanning and endpoint protection are essential defenses against these threats.

---

## 14. What is the difference between a virus and a worm?

A virus is a type of malware that attaches itself to a legitimate program or file and requires user action (such as opening the file) to activate and spread. A worm, in contrast, is a standalone malware that self-replicates and spreads across networks without requiring any user interaction. Worms can propagate rapidly across connected systems, consuming bandwidth and resources, while viruses typically spread more slowly through infected files or media.

---

## 15. What is a denial-of-service (DoS) attack?

A denial-of-service (DoS) attack aims to overwhelm a system, server, or network with excessive traffic or requests, rendering it unavailable to legitimate users. Techniques include SYN floods, UDP floods, and HTTP request floods.

Prevention strategies include implementing firewalls, traffic filtering, rate limiting, redundancy, and using specialized anti-DoS services. While a DoS attack typically originates from a single source, its more advanced form, DDoS, uses multiple compromised systems simultaneously.

---

## 16. What is a distributed denial-of-service (DDoS) attack?

A DDoS attack is an advanced form of DoS where multiple compromised systems, often part of a botnet, flood a target with traffic. Unlike a traditional DoS from a single source, DDoS leverages thousands or millions of devices, making it much harder to mitigate.

Common targets include e-commerce platforms, financial institutions, and government websites. Mitigation involves traffic analysis, network redundancy, content delivery networks (CDNs), anti-DDoS appliances, and cloud-based DDoS protection services.

---

## 17. What is SQL injection?

SQL injection (SQLi) is a web application attack where attackers manipulate input fields to execute malicious SQL commands on a backend database. For example, entering `' OR 1=1 --` in a login form could bypass authentication.

SQL injection can lead to data breaches, loss of confidentiality, and regulatory penalties. Prevention includes using prepared statements, parameterized queries, input validation, stored procedures, and web application firewalls (WAFs). Regular code review and security testing are essential to mitigate this risk.

---

## 18. What is cross-site scripting (XSS)?

Cross-site scripting (XSS) is a web security vulnerability where attackers inject malicious scripts into webpages viewed by other users. These scripts execute in the victim's browser, allowing attackers to steal cookies, session tokens, or sensitive information.

XSS comes in three main types:
- **Stored XSS**: Malicious code is permanently stored on a website.
- **Reflected XSS**: The script is reflected off a web server, such as in search results.
- **DOM-based XSS**: The attack manipulates the Document Object Model in the browser.

Prevention involves input validation, output encoding, Content Security Policy (CSP), and secure development practices.

---

## 19. What is a zero-day vulnerability?

A zero-day vulnerability is a previously unknown software or system flaw that attackers can exploit before developers release a patch. Since the vulnerability is unknown to the vendor, there is "zero day" to prevent exploitation.

Zero-day exploits are highly valued on the black market and often used in targeted attacks against organizations, government agencies, and critical infrastructure. Mitigation requires layered security: intrusion detection, behavioral monitoring, timely patching, endpoint protection, and threat intelligence to detect anomalies.

---

## 20. What is social engineering?

Social engineering is a manipulation technique that exploits human psychology rather than technical vulnerabilities to gain unauthorized access to systems, data, or physical locations. Attackers trick individuals into divulging confidential information, clicking malicious links, or performing actions that compromise security.

Common forms include phishing, pretexting, baiting, tailgating, and vishing (voice phishing). The best defense is a combination of cybersecurity awareness training, strict verification protocols, and security policies that limit exposure to social engineering tactics.

---

## 21. What is the difference between authentication and authorization?

- **Authentication** verifies the identity of a user, system, or device before granting access. It answers: "Are you who you claim to be?" Mechanisms include passwords, biometrics, smart cards, and multi-factor authentication (MFA).
- **Authorization** determines what actions or resources an authenticated user is allowed to access. It answers: "What are you allowed to do?" It relies on permissions, roles, access control lists, and policies.

For example, a user may successfully authenticate to a network but only have access to specific files based on their role. Proper implementation of both is essential for system security.

---

## 22. What is two-factor authentication (2FA)?

Two-factor authentication (2FA) is a security mechanism that requires users to provide two distinct forms of identification before gaining access. Typically it combines something you know (password), something you have (a phone or hardware token), or something you are (biometrics). 2FA significantly reduces the risk of unauthorized access even if one factor, such as a password, is compromised.

---

## 23. What is a brute force attack?

A brute force attack is a method where attackers systematically try all possible combinations of passwords or encryption keys until the correct one is found. It exploits weak or short passwords and relies on computational power.

Prevention involves enforcing strong password policies, implementing account lockouts after multiple failed attempts, using rate-limiting on login attempts, and employing multi-factor authentication (MFA).

---

## 24. What is a man-in-the-middle (MITM) attack?

A man-in-the-middle attack occurs when an attacker intercepts and potentially alters communication between two parties without their knowledge. The attacker can eavesdrop on sensitive information, manipulate messages, or impersonate one of the parties.

MITM attacks are common on unsecured networks such as public Wi-Fi. Techniques include packet sniffing, session hijacking, SSL stripping, and DNS spoofing. Prevention involves using strong encryption (HTTPS, VPNs), mutual authentication, secure Wi-Fi networks, and certificate validation.

---

## 25. What is a honeypot in cybersecurity?

A honeypot is a security mechanism that simulates vulnerable systems, networks, or applications to attract, detect, and analyze cyber attackers. It acts as a decoy, enticing attackers to engage with it rather than real assets.

Honeypots can be low-interaction (limited emulation to detect automated attacks) or high-interaction (realistic environments to study sophisticated attacks). They help security teams gather intelligence about attacker tactics, techniques, and procedures (TTPs). Honeypots must be carefully managed to prevent attackers from using them to infiltrate actual systems.

---

## 26. What is the concept of access control?

Access control determines who or what can access resources, under what conditions, and at what level. It ensures that only authorized individuals or systems can view, modify, or use specific data.

Models include:
- **Discretionary Access Control (DAC)**: Resource owners decide who can access them.
- **Mandatory Access Control (MAC)**: Access is determined by system-enforced rules based on security labels.
- **Role-Based Access Control (RBAC)**: Permissions are assigned to roles, and users are granted roles based on job functions.
- **Attribute-Based Access Control (ABAC)**: Access decisions are based on attributes like user location, device, time of day, or data sensitivity.

---

## 27. What is the principle of least privilege?

The principle of least privilege states that users, processes, and systems should be granted only the minimum level of access or permissions necessary to perform their duties. By restricting unnecessary access, organizations reduce the attack surface and limit the potential damage from compromised accounts, insider threats, or malware infections. Least privilege is a foundational concept in access control, identity management, and zero-trust architecture.

---

## 28. What is patch management?

Patch management is the process of regularly updating software, operating systems, and applications to fix vulnerabilities, bugs, and security flaws. Attackers often exploit unpatched systems to gain unauthorized access, install malware, or disrupt operations.

The process involves identifying available patches, testing them for compatibility, deploying them across systems, and verifying successful installation. Automated patch management tools help manage updates efficiently. Patch management is critical for both security and compliance, as standards like PCI DSS and ISO 27001 require timely remediation of known vulnerabilities.

---

## 29. What is a security policy?

A security policy is a formalized set of rules, guidelines, and procedures that define how an organization protects its information assets and manages cybersecurity risks. It covers areas including access control, data protection, acceptable use, password management, network security, incident response, and regulatory compliance.

For example, a policy may specify password complexity rules, mandatory encryption for sensitive data, and protocols for reporting security incidents. Well-defined security policies standardize behavior, clarify responsibilities, and demonstrate commitment to protecting critical assets.

---

## 30. What is network segmentation and why is it important?

Network segmentation is the practice of dividing a network into smaller, isolated sub-networks (segments). Each segment has its own access controls and security policies, limiting the lateral movement of attackers if one segment is compromised.

Benefits include:
- Reduced attack surface and blast radius
- Improved monitoring and traffic management
- Enhanced compliance with regulations that require isolation of sensitive data
- Better containment of malware outbreaks and breaches

Network segmentation is a key component of defense-in-depth and zero-trust architectures.

---

## 31. What is a Web Application Firewall (WAF)?

A Web Application Firewall (WAF) is a cybersecurity tool that filters, monitors, and blocks HTTP/HTTPS traffic between a web application and the internet. It protects web applications from common attacks such as SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), and other OWASP Top 10 vulnerabilities.

WAFs operate by applying a set of rules to identify and block malicious traffic patterns while allowing legitimate requests to pass through. They can be deployed as hardware, software, or cloud-based services.

---

## 32. What is penetration testing and how does it differ from vulnerability scanning?

- **Vulnerability scanning** is an automated process that identifies known vulnerabilities in systems, networks, or applications by comparing them against a database of known issues. It provides a broad overview but does not exploit the vulnerabilities.
- **Penetration testing** is a manual, authorized simulation of a real attack where security professionals actively attempt to exploit vulnerabilities to assess the actual risk and impact. It provides deeper insights into how an attacker could compromise a system.

Organizations use both together: vulnerability scanning for regular assessment and penetration testing for in-depth security validation.

---

## 33. What is the difference between black box and white box testing?

- **Black box testing** is performed without knowledge of the system's internal structure or source code. The tester evaluates the system purely from an external perspective, simulating an attacker with no insider information.
- **White box testing** is performed with full knowledge of the internal structure, code, and architecture. The tester can examine logic, data flow, and code-level vulnerabilities.

Both approaches are used in cybersecurity assessments. Black box testing simulates external attacker scenarios, while white box testing provides thorough code-level analysis.

---

## 34. What is SIEM and what role does it play in cybersecurity?

Security Information and Event Management (SIEM) tools collect, aggregate, and analyze security data from across an organization's infrastructure in real time. SIEM solutions correlate events from multiple sources, including firewalls, IDS/IPS, endpoints, and servers, to detect security incidents, anomalies, and policy violations.

Key capabilities include log management, real-time alerting, incident investigation, compliance reporting, and threat intelligence integration. Popular SIEM platforms include Splunk and QRadar. SIEM is essential for Security Operations Center (SOC) teams to maintain visibility and respond to threats promptly.

---

## 35. What is endpoint security?

Endpoint security refers to protecting end-user devices such as laptops, desktops, smartphones, and tablets against cyber threats. Endpoints are often the most vulnerable entry points for attackers.

Key measures include:
- Installing antivirus and anti-malware software
- Using host-based firewalls and intrusion detection/prevention
- Regularly updating systems to patch vulnerabilities
- Encrypting sensitive data stored on devices
- Implementing multi-factor authentication
- Restricting user privileges based on roles

Endpoint Detection and Response (EDR) solutions add advanced capabilities such as behavioral analysis, automated response, and forensic investigation.

---

## 36. What is public key infrastructure (PKI)?

Public Key Infrastructure (PKI) is a framework of policies, procedures, and technologies used to manage digital certificates and public-key encryption. PKI enables secure communication, authentication, and data integrity across networks.

Key components include:
- **Certificate Authority (CA)**: Issues and manages digital certificates.
- **Registration Authority (RA)**: Verifies the identity of entities requesting certificates.
- **Digital certificates**: Bind public keys to identities.
- **Certificate Revocation Lists (CRLs)**: Track revoked certificates.

PKI underpins SSL/TLS, email encryption, code signing, and VPN authentication.

---

## 37. How does SSL/TLS work?

SSL (Secure Sockets Layer) and its successor TLS (Transport Layer Security) are cryptographic protocols that secure communications over networks. When a client connects to a server:

1. The client initiates a handshake and sends supported cipher suites.
2. The server responds with its digital certificate and chosen cipher suite.
3. The client verifies the server's certificate against a trusted Certificate Authority.
4. Both parties exchange key material to establish a shared session key.
5. All subsequent communication is encrypted using the session key.

SSL/TLS protects data confidentiality and integrity, and is the foundation for HTTPS, securing web browsing, email, and other internet communications.

---

## 38. What is the difference between HTTP and HTTPS?

HTTP (Hypertext Transfer Protocol) transmits data in plaintext between a client and a server, making it vulnerable to eavesdropping, MITM attacks, and data tampering. HTTPS (HTTP Secure) adds an SSL/TLS encryption layer on top of HTTP, ensuring that data is encrypted during transmission.

HTTPS provides confidentiality, integrity, and authentication through digital certificates. Websites handling sensitive information such as login credentials, payment data, or personal information should always use HTTPS.

---

## 39. What is SSH?

Secure Shell (SSH) is a cryptographic network protocol that provides a secure way for system administrators to access remote systems and transfer data over an unsecured network. SSH encrypts all traffic between the client and server, preventing eavesdropping and tampering.

SSH is commonly used for remote command-line access, file transfers (via SCP or SFTP), and tunneling other protocols. It replaces insecure protocols like Telnet and FTP, which transmit data in plaintext.

---

## 40. What is port scanning?

Port scanning is a technique used to discover open ports and available services on a host or network. Security professionals use port scanning to identify potential vulnerabilities in their own systems, while attackers use it for reconnaissance to find exploitable entry points.

Common tools include Nmap and Masscan. Organizations defend against port scanning by closing unnecessary ports, using firewalls to filter traffic, deploying intrusion detection systems, and monitoring for scanning activity.

---

## 41. What is network sniffing?

Network sniffing is the process of capturing and analyzing data packets traveling across a network. Legitimate uses include network troubleshooting, performance monitoring, and security analysis. Malicious uses include intercepting credentials, sensitive data, or session tokens.

Specialized software (e.g., Wireshark) or hardware equipment can capture packets. Defenses against malicious sniffing include encrypting network traffic (HTTPS, VPNs, SSH), using secure protocols, and implementing network segmentation.

---

## 42. What is a buffer overflow attack?

A buffer overflow occurs when a process writes more data to a fixed-length memory block (buffer) than it can hold. The excess data overflows into adjacent memory, potentially corrupting data, crashing the application, or allowing the attacker to execute arbitrary code.

Buffer overflow vulnerabilities are common in programs written in languages like C and C++ that do not perform automatic bounds checking. Prevention includes using safe coding practices, bounds checking, stack canaries, Address Space Layout Randomization (ASLR), and Data Execution Prevention (DEP).

---

## 43. What is data exfiltration?

Data exfiltration is the unauthorized transfer of data from a computer system or network. It can be performed manually by someone with physical access or remotely through malware, compromised accounts, or covert channels.

Common methods include email, USB drives, cloud storage, encrypted tunnels, and DNS tunneling. Prevention involves data loss prevention (DLP) tools, network monitoring, access controls, encryption, and employee awareness training.

---

## 44. What are advanced persistent threats (APT)?

Advanced Persistent Threats (APTs) are prolonged, targeted cyberattacks where an attacker gains and maintains unauthorized access to a network over an extended period. APTs are typically carried out by well-funded, sophisticated threat actors such as nation-states or organized crime groups.

Characteristics include:
- Targeted reconnaissance and initial compromise (often through spear-phishing or zero-day exploits)
- Lateral movement within the network to access high-value targets
- Persistence mechanisms to maintain long-term access
- Slow, stealthy data exfiltration to avoid detection

Detection requires advanced monitoring, behavioral analytics, threat intelligence, and incident response capabilities.

---

## 45. What is threat modeling?

Threat modeling is a structured approach to identifying, assessing, and prioritizing potential threats to an application, system, or network. It involves analyzing the architecture, identifying assets, mapping potential attack vectors, and evaluating the impact and likelihood of each threat.

Common methodologies include STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) and DREAD (Damage, Reproducibility, Exploitability, Affected Users, Discoverability). Threat modeling is performed during design and development phases to proactively address security risks before deployment.

---

## 46. What is system hardening?

System hardening is a collection of tools, techniques, and best practices for reducing vulnerabilities in systems, applications, and firmware. The goal is to minimize the attack surface by eliminating unnecessary services, closing unused ports, applying patches, enforcing strong configurations, and removing default credentials.

Hardening applies to operating systems, servers, databases, network devices, and applications. It is a critical step in any security program and is often required by compliance standards such as CIS Benchmarks and NIST guidelines.

---

## 47. What is a cybersecurity risk assessment?

A cybersecurity risk assessment is the process of identifying information assets vulnerable to cyberattacks, evaluating potential threats to those assets, and determining the likelihood and impact of exploitation. It is used to detect, assess, and prioritize risks across an organization.

Steps include:
1. Identifying and classifying assets (data, hardware, applications)
2. Identifying threats and vulnerabilities
3. Assessing the likelihood and impact of each risk
4. Prioritizing risks based on severity
5. Recommending and implementing mitigation controls

Risk assessments are foundational to security strategy, compliance, and resource allocation.

---

## 48. What is the Diffie-Hellman key exchange?

Diffie-Hellman is a cryptographic protocol that allows two parties to establish a shared secret key over an insecure channel without transmitting the key itself. Each party generates a private key and a corresponding public value. By exchanging public values and combining them with their own private keys, both parties arrive at the same shared secret.

This shared key can then be used for symmetric encryption of subsequent communications. Diffie-Hellman is fundamental to protocols like TLS and IPsec and is the basis for achieving forward secrecy.

---

## 49. What is forward secrecy?

Forward secrecy (also called perfect forward secrecy) is a property of key agreement protocols that ensures session keys remain secure even if the server's long-term private key is later compromised. Each session uses a unique, ephemeral key pair for key exchange, so compromising one session's key does not expose past or future sessions.

Forward secrecy is achieved through protocols like Ephemeral Diffie-Hellman (DHE) or Elliptic Curve Diffie-Hellman Ephemeral (ECDHE). It is a critical feature for protecting the long-term confidentiality of encrypted communications.

---

## 50. What is the chain of custody in digital forensics?

Chain of custody is the chronological documentation and paper trail that records the management, handling, and transfer of evidence from the time it is collected until it is presented in court. It ensures that evidence, particularly digital evidence, has been preserved in its original form and has not been altered, tampered with, or mishandled.

Maintaining a proper chain of custody is essential for digital forensics investigations to ensure that evidence is admissible in legal proceedings. It includes documenting who collected the evidence, when and where it was collected, how it was stored, and who had access to it at every stage.
