# Stop Using VPNs for Privacy

This guide explains why commercial VPNs are not a complete privacy solution, how they can fail, practical risks with self-hosted VPNs, and sensible alternatives and mitigations. The content is concise, technically accurate, and organized for easy reference.

## 1. Overview

Virtual private networks (VPNs) are advertised as privacy tools that hide your browsing from ISPs and bypass geographic restrictions. In practice, a VPN moves the point of trust from your ISP to the VPN provider. A VPN can help in limited scenarios, but it does not provide comprehensive privacy or anonymity. This guide clarifies common misconceptions and gives practical advice for when and how to use VPN technology safely.

## 2. What a VPN actually does

A VPN creates an encrypted tunnel between your device and a remote server. Traffic leaving the VPN server is visible to whatever service you contact, but your ISP sees only the VPN endpoint. Key consequences:

- Your ISP or local network cannot see the sites you visit, only the VPN server IP.
- The VPN provider can see your destination sites and metadata unless you use additional encryption from the client to the target.
- You authenticate to the VPN provider with your real IP or account details, which can link your traffic to your identity.
- The provider’s jurisdiction and logging practices determine how resistant your traffic is to lawful requests.

## 3. Main privacy risks of commercial VPNs

- **Single point of trust**: Using a VPN replaces one untrusted party with another. If the VPN provider logs or is compelled to hand over data, your traffic may be exposed.
- **No independent verification**: Many providers claim "no logs" but offer limited transparency. Independent audits vary in scope and do not provide continuous verification.
- **Compromise and breaches**: VPN servers can be breached. Historical incidents demonstrate that a compromised server can expose traffic and metadata for the period of compromise.
- **Gag orders and legal requests**: Providers based in certain countries can be legally compelled to hand over data and also be prevented from disclosing the request.
- **Honeypot risk**: A malicious or coerced VPN operator can collect traffic deliberately. A VPN that markets itself as anonymity for criminals is an obvious red flag.
- **IP reuse and blocking**: Popular VPN IP ranges are widely known and may be blocked by services. Using a VPN can draw attention to your traffic if the destination blocks VPN ranges or enforces stricter checks.

## 4. Why VPNs do not provide anonymity

- **Account correlation**: If you log into personal accounts (social media, email, banking) while connected to a VPN, those accounts can be correlated with your VPN session and reveal your identity.
- **Traffic correlation attacks**: Adversaries observing both ends of a connection may correlate traffic patterns to deanonymize users.
- **Metadata exposure**: Even when content is encrypted, metadata such as timing, volume, and destination can be revealing.
- **Trust and insider risk**: Employees or operators at a VPN provider, or governments compelling them, can access logs or server memory.

## 5. The NordVPN example and provider compromises

High-profile incidents have shown that even well-known providers can suffer server compromises. A single compromised server can capture traffic for a period before detection. This demonstrates that provider reputation alone is not a guarantee of security.

## 6. Self-hosted VPN limitations and OpenVZ caveat

Self-hosting a VPN on a virtual private server (VPS) can be attractive, but it has serious pitfalls:

- **Virtualization type matters**: Many cheap VPS providers use container-based virtualization such as OpenVZ. Containers share the host kernel and typically provide less isolation than full virtualization. On some platforms, the host operator can observe processes, memory, and disk contents in ways that defeat privacy claims.
- **Kernel and software support**: Older container kernels can lack support for modern networking stacks and secure software. Some providers run outdated kernels that limit features and security.
- **Provider access**: With container-based hosting, the provider can access your virtual environment in real time. This makes it impossible to guarantee that data is inaccessible to the host operator.
- **Overprovisioning and suspension**: Cheap VPS plans often rely on overcommitment. Providers may suspend or terminate instances under heavy use.
- **Jurisdiction and logging**: Self-hosting still places trust in the VPS operator and the country of operation. Legal requests or server compromise remain risks.

If you self-host, prefer providers that offer full virtualization such as KVM or Xen and verify the provider’s operational practices and jurisdiction.

## 7. Practical scenarios where a VPN is useful

VPNs are practical in several limited situations:

- **Untrusted local networks**: On open Wi-Fi networks such as airports and cafes, a VPN helps prevent local eavesdroppers from snooping unencrypted traffic.
- **Bypassing local censorship**: In countries where certain sites are blocked, a VPN can provide access to blocked content.
- **Corporate privacy and remote access**: Companies use VPNs to provide secure remote access to internal resources.
- **Protecting browsing from a local admin**: If you need to hide visited sites from a home or small office router admin, a VPN provides basic privacy.

Use a VPN only for these narrow goals and avoid treating it as comprehensive anonymity.

## 8. Safer alternatives and complementary tools

- **Tor**: For stronger anonymity against wide-scale surveillance, the Tor network is designed to prevent an adversary from easily linking you to your traffic. Tor has limitations, including performance and some site incompatibilities, but it offers a different threat model than VPNs.
- **SSH tunnels or personal gateways**: A carefully configured SSH tunnel to a trusted server can be a simpler alternative for specific tasks.
- **End-to-end encryption**: Use HTTPS, secure email, and encrypted messaging to protect content independently of the transport path.
- **Compartmentalization**: Keep sensitive activities on isolated devices or separate browser profiles. Do not mix personal accounts with anonymous sessions.
- **Selective use**: Use a VPN only when it addresses a specific threat, not as a general privacy panacea.

## 9. Recommendations if you must use a VPN

If a VPN is necessary for your use case, apply these controls:

- **Choose trusted providers with transparency**: Prefer providers with independent audits, transparent infrastructure, and clear jurisdictional information.
- **Understand the jurisdiction**: Avoid providers in countries with broad lawful access powers if you need protection from those governments.
- **Avoid free or suspicious services**: Low-cost or free VPNs frequently monetize by logging or selling connection data.
- **Do not authenticate to personal accounts over the same VPN session used for anonymous activities**: Keep identity-bearing sessions separate from privacy sessions.
- **Self-host carefully**: If you self-host, pick KVM or Xen providers, avoid OpenVZ/container-only hosts, and monitor provider practices.
- **Use multi-layered privacy**: Combine transport protections with application-level encryption and compartmentalization.
- **Regularly review provider security reports**: Monitor public disclosures, audits, and breach notices for the provider you use.

## 10. Conclusion

VPNs can be useful tools for limited problems such as protecting traffic on untrusted local networks or bypassing local censorship. They are not a universal privacy solution. A VPN shifts trust rather than removing it. For strong anonymity, use tools designed for that purpose, such as Tor, and apply operational best practices like compartmentalization, end-to-end encryption, and careful choice of hosting and jurisdiction. If you do use a VPN, do so intentionally, understand its limits, and combine it with other protections.
