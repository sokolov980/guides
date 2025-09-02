# How to Stay Anonymous Online

## Introduction

Staying anonymous online has become increasingly difficult in the era of Big Tech. While privacy might seem like an elusive goal, implementing layers of privacy tools and practices can go a long way to making sure your data is not being harvested by corporations, governments, or malicious actors. This guide provides a layered approach to online anonymity and privacy, covering hardware, network, communication, and operational security.

---

## Layer 1: Hardware

### 1.1 Acquiring Privacy-Respecting Hardware
To enhance your privacy from the outset, acquire your hardware (laptop, smartphone, etc.) using anonymous methods. Consider purchasing with a prepaid debit card or privacy-oriented cryptocurrency (e.g., Monero).

Additionally, store your hardware securely:
- **Fireproof Safe**: Store your device in a fireproof safe when not in use to prevent unauthorized physical access.

### 1.2 Full Disk Encryption (FDE)
- Enable **Full Disk Encryption (FDE)** to protect your device in case of physical theft. This ensures your data is encrypted at the hardware level, requiring an encryption key to access it.
- Set the encryption key bit length to the highest setting possible to increase security.

### 1.3 Using Live Operating Systems
- For optimal privacy, use a **Live OS** on a USB stick, such as **Whonix** or **Tails**, to avoid traces left by your main operating system.
- Consider wiping the native operating system and installing a privacy-oriented OS. This minimizes the risk of privacy breaches from your OS (e.g., Windows).

---

## Layer 2: Network

### 2.1 Randomizing Your Network Identifiers
- **MAC Address**: Randomize your device's **MAC address** to prevent it from being linked to your identity. Use tools, scripts, or live OS options to automate this.
- **Host Name**: Change your device's hostname to something random to avoid identifying information.

### 2.2 Router and Network Segmentation
- **Segment Your Network**: Use a router with segmented networks, especially if you have multiple devices (e.g., guest, work, family). Keep these networks isolated from each other.
- **Router Hardening**: Consider wiping your ISP-provided router firmware and installing privacy-focused software like **pfSense** to control traffic.
- Use **TorBox** (based on Raspberry Pi) for routing all data through the Tor network, providing anonymity for all devices on the network.

### 2.3 DNS Security
- Do not use your **ISP-provided DNS**. Instead, configure a trusted, privacy-respecting DNS service like **Quad9** or **Cloudflare** (or, ideally, use **Tor** for DNS resolution).
- Whonix, for instance, uses **Tor** as its DNS service by default for maximum privacy.

### 2.4 IP Address Randomization
- Utilize services like **VPNs**, **Proxies**, and **Tor** for IP address randomization.
  - **VPN**: Use a trusted, no-log VPN like **Mullvad**. VPNs can obscure your real IP but don’t provide full anonymity.
  - **Tor**: Use **Tor** for optimal privacy. Tor encrypts your traffic and routes it through multiple nodes for anonymity.
  - **Proxies**: Tools like **ProxyChains** can be used to route traffic through multiple proxies, adding extra obfuscation.

---

## Layer 3: Communication & Transactions

### 3.1 Secure Messaging
- Use **end-to-end encrypted (E2E)** messaging services. Popular options include:
  - **Signal**: Highly recommended for privacy, supporting text, voice, and video calls.
  - **Wire** and **Threema**: Other secure alternatives.

### 3.2 Privacy-Focused Email
- Use encrypted email providers like **ProtonMail** or **Tutanota**, both of which offer E2E encryption by default.
- Avoid using services like Gmail, which collect vast amounts of user data.

### 3.3 Search Privacy
- Use search engines that respect privacy. Avoid Google and Bing:
  - **DuckDuckGo**: A popular choice for anonymous searches.
  - **SearX**: A meta search engine that aggregates multiple engines without tracking you.
  
### 3.4 Secure File Storage
- Use **VeraCrypt** for encrypting sensitive files. VeraCrypt creates encrypted containers for your files, ensuring they are secure by default.

---

## Layer 4: OPSEC (Operational Security)

### 4.1 Sock Puppets and Writing Style
- **Sock Puppets**: Create random usernames or personas that aren’t tied to your real identity when posting online.
- **Writing Style**: Be aware of your writing style. Repeatedly using certain phrases or misspellings could reveal your identity.

### 4.2 Social Media and Location Sharing
- Avoid sharing sensitive information on social media platforms (e.g., Instagram, Facebook). These platforms are designed to track your activity.
- Refrain from posting your location publicly.

---

## Threat Models & Biometrics

### 5.1 Creating a Threat Model
- Define who you need protection from. For example, if you are concerned about law enforcement, avoid using biometrics (e.g., fingerprints, face scans) to secure your devices.
  
### 5.2 Two-Factor Authentication (2FA)
- For enhanced security, use **hardware security keys** like **YubiKey** for 2FA. This prevents account access if the key is lost or destroyed.

### 5.3 Avoiding SMS-Based 2FA
- **SMS** is vulnerable to interception and should be avoided. Use authenticator apps (e.g., **Tofu Authenticator**) or hardware keys for 2FA.

---

## Using Tor and VPN for Anonymity

### 6.1 Tor Network Usage
- **Tor** can provide strong anonymity by routing your traffic through multiple encrypted nodes. However, it’s important not to use any accounts created on your public IP address, as this could compromise anonymity.
- **Tor** is not perfect. Block **JavaScript** to avoid exploits that can track your real IP.

### 6.2 VPN and Profile Separation
- Use a VPN (e.g., **Mullvad**) to anonymize your traffic, but avoid mixing your real IP accounts with VPN traffic. Always create a VPN account anonymously, ideally through **Tor** and paying with **Monero**.

### 6.3 Use Separate Browser Profiles
- Create **multiple browser profiles** for different activities to prevent cross-tracking between personal, professional, and anonymous browsing sessions.

---

## Conclusion

Staying anonymous online is a challenging but achievable goal. By layering your privacy practices across hardware, networks, communications, and operational security, you can greatly reduce the risk of your identity and activity being exposed. Each layer adds complexity for trackers and enhances your overall privacy online.
