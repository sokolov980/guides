# There Is No Private Email

Email, as a protocol and communication medium, was not designed with privacy or end-to-end encryption in mind. While modern providers offer improved encryption and security features, it remains fundamentally impossible to achieve complete privacy through traditional email systems. This guide explains the technical and practical limitations of “private” email, the realities of current encryption models, and what users can do to reduce exposure.

## 1. The Illusion of Private Email

Many users compare providers like ProtonMail, Tuta, or Skiff based on jurisdictional privacy laws, such as comparing Swiss and [German privacy regulations](https://www.gesetze-im-internet.de/bdsg_2018/BJNR209710017.html). However, the main issue is not legal geography but the architecture of email itself.

Even if you host an email server on hardened infrastructure such as an OpenBSD-based mail system with Tor routing, encrypted domains, and air-gapped storage, email remains inherently insecure. The message you send still travels through multiple networks, intermediate servers, and ISPs, and will eventually sit unencrypted (at least temporarily) on another provider’s server.

In short, privacy within email is not absolute. It depends on trust in the service provider, the software, and the infrastructure handling your communication.

## 2. Trust Boundaries and Provider Limitations

All major “private” email providers, including ProtonMail, Tuta, and Skiff, must be trusted not to modify their web applications or server software in ways that could compromise user security. In theory, any provider could serve a malicious login page to a specific IP address to capture credentials and two-factor authentication tokens. While corporate and legal controls make this unlikely, it is technically possible.

For example, [Proton’s zero-access encryption model](https://proton.me/blog/zero-access-encryption) ensures that stored messages are encrypted so that Proton cannot access them after storage. However, as Proton itself notes, when an email from Gmail reaches a ProtonMail inbox, the message is readable by Proton’s servers because Gmail does not support end-to-end encryption. This demonstrates a fundamental limitation: email interoperability breaks privacy guarantees.

Similarly, the [Skiff Whitepaper](https://skiff-org.github.io/whitepaper/Skiff_Whitepaper_2022.pdf) clearly states that unencrypted messages are received and encrypted server-side before storage. The [Proton encryption documentation](https://proton.me/support/proton-mail-encryption-explained) describes a similar model, where messages are encrypted in transit using TLS, then decrypted and re-encrypted with zero-access encryption at rest, which is not true end-to-end encryption.

[Tuta’s documentation](https://tuta.com/encryption) outlines the same reality. Although Tuta states that unencrypted emails are never stored unencrypted, these messages are only encrypted once they reach Tuta’s servers.

In all these cases, users must trust that the service’s infrastructure is operating as advertised without hidden modifications or unauthorized access.

## 3. Transparency and Provider Honesty

Some providers are more transparent than others about these limitations. For instance, [cock.li](https://cock.li) openly states that its operator could technically read user emails and explicitly advises users to employ their own PGP encryption. While it is not a recommended service, this honesty about the limits of provider-based trust is notable compared to the more sanitized marketing language of larger companies.

## 4. Metadata and Partial Encryption

Even when message contents are encrypted, metadata such as sender, recipient, timestamps, and sometimes subject lines often remain exposed. Proton, for example, specifies that subject lines and recipient/sender addresses are not end-to-end encrypted. This metadata alone can reveal communication patterns, relationships, and habits even when message bodies are protected.

## 5. The Role of End-to-End Encryption

End-to-end encryption (E2EE) works effectively only within a closed ecosystem such as Proton-to-Proton or Skiff-to-Skiff communication. While these implementations are secure in principle, their usefulness is limited because most email communication happens across providers. As a result, E2EE coverage in email is minimal for typical users.

If the goal is private communication, purpose-built secure messengers such as [Briar](https://briarproject.org/how-it-works) or Matrix are more appropriate. These systems avoid centralized servers and metadata leakage inherent to email.

## 6. The Practical Reality of Email Privacy

Despite encryption, email remains subject to surveillance, logging, and legal requests. Even privacy-oriented companies must comply with lawful data requests. For example, Proton has [complied with warrants in the past](https://proton.me/blog/climate-activist-arrest).

Users should assume that any email stored on a third-party server may eventually be accessible to external entities through lawful access, compromise, or cooperation. For most users, the goal should be risk reduction rather than complete anonymity.

## 7. Comparing Modern Privacy-Focused Services

| Provider | Advantages | Limitations |
|-----------|-------------|-------------|
| **ProtonMail** | Strong ecosystem (Mail, Calendar, Drive, VPN). Zero-access encryption at rest. Owns [SimpleLogin](https://simplelogin.io/). | Not true end-to-end encryption with external senders. Metadata partially exposed. |
| **Tuta** | Open-source, encrypted calendar, cross-platform clients. | Messages only encrypted at rest. Dependent on server trust. |
| **Skiff** | Encrypted mail, notes, drive, and collaboration suite. Transparent documentation. | Rendering performance issues. Some features less mature than competitors. |
| **cock.li** | Fully transparent about risks and limitations. | Not suitable for sensitive or professional use. |

### Integration Example: ProtonMail and SimpleLogin

In April 2022, Proton acquired **SimpleLogin**, an email aliasing service similar to Apple’s Hide My Email or [Addy.io](https://addy.io/). This integration allows Proton users to generate unique email aliases for different services. Alias-based isolation reduces data exposure in case of breaches and simplifies spam control.

Using a single integrated provider (Proton and SimpleLogin) also minimizes exposure compared to using two separate companies for aliasing and email hosting.

## 8. Self-Hosting and Deliverability Concerns

Operating a personal email server, for example using **mailcow** or **CrowdSec**, may seem like the most secure solution but introduces serious challenges:
- Complex configuration requirements.
- Poor deliverability to major providers such as Gmail or Outlook.
- Ongoing maintenance and security updates.
- Risk of IP blacklisting.

In many cases, messages sent from small self-hosted domains are rejected or flagged as spam. Unless you manage enterprise-grade infrastructure, self-hosting usually reduces reliability more than it improves privacy.

## 9. Email Aliases and Identity Management

Using aliases is a practical step toward privacy. Instead of one static email address, users can generate multiple disposable or category-specific aliases (for example: personal, finance, commerce, etc.). This helps isolate services and contain data leaks.

Unlimited aliasing features such as those in SimpleLogin allow users to create unique, single-use addresses without managing separate accounts. This does not solve the privacy limitations of email itself, but it reduces traceability and spam.

## 10. Usability and Application Differences

Performance and interface quality differ slightly among providers:
- **ProtonMail** generally renders HTML emails (such as those from eBay or banks) more accurately and offers customizable features like swipe actions and toolbar controls, including “Save to PDF.”
- **Skiff Mail** is improving but remains slower in rendering certain emails. Some web services, including [GitHub](https://github.com/logseq/logseq/issues/8756) and [Logseq](https://discuss.logseq.com/), have experienced issues sending confirmation messages to Skiff domains.
- **ProtonMail** offers [password-protected email delivery](https://proton.me/support/password-protected-emails), which works similarly to [Bitwarden Send](https://bitwarden.com/products/send/).

## 11. Calendars, Cloud Storage, and Notes

Both Proton and Skiff offer encrypted calendars and cloud storage, but their features differ:
- **Calendars**: Proton allows [subscription to external calendars](https://proton.me/support/subscribe-to-external-calendar). Skiff does not yet support this feature.
- **Cloud Storage**: [Proton Drive](https://proton.me/blog/proton-drive-windows) now supports Windows sync clients and web-based uploads. Skiff Drive integrates tightly with Skiff Notes but lacks separation between files and notes.
- **Encrypted Notes**: Skiff Notes supports rich-text editing and hierarchical organization, providing a balance between usability and privacy.

## 12. VPN Considerations

VPN services, even those operated by privacy-oriented companies, must be treated cautiously. A VPN shifts trust from your ISP to the VPN provider. While ProtonVPN is included in Proton subscriptions and offers convenience, it does not guarantee anonymity. 

VPNs should be used to obscure browsing activity from local networks, not as a universal privacy solution.

## 13. Legal Compliance and Real-World Boundaries

All email providers are bound by local laws and can be compelled to cooperate with authorities. Even services in privacy-friendly jurisdictions must comply with court orders and international data-sharing treaties. No provider can offer complete immunity from lawful data requests.

At a technical level, encrypted or not, all email metadata and routing information remain exposed to network observers.

## 14. Conclusion

Email cannot provide full privacy or anonymity. Even the most security-focused providers must be trusted at multiple layers: application, infrastructure, and policy. Encryption mitigates risk but does not eliminate it.

For users who require operational security, encrypted messengers such as [Briar](https://briarproject.org/how-it-works) or Matrix should be preferred. For others, privacy-oriented email services such as ProtonMail or Tuta can meaningfully reduce exposure if users understand their limits.

Absolute privacy does not exist in email. What can exist is an informed trade-off between usability, trust, and control.
