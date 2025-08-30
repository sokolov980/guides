# How to Configure iOS for Privacy and Security

This guide walks you through configuring iOS for better privacy and security. By adjusting various settings, you can significantly reduce the amount of data collected by your device and protect yourself from unnecessary tracking.

---

## Wi-Fi, Bluetooth, and Cellular Settings

- **Settings > Wi-Fi**  
  Disable Wi-Fi when you're not home. Wi-Fi networks can be used to track your location, so it's better to keep it off when not needed.

- **Settings > Bluetooth**  
  Disable Bluetooth unless required. Many apps and services use Bluetooth for proximity tracking, which could be a privacy concern. For instance, Bluetooth Low Energy (BLE) was considered for proximity detection during COVID-19, meaning it could track your movements.

- **Settings > Cellular**  
  Disable Wi-Fi Calling and Calls on Other Devices. This limits cross-communication between your devices and keeps them compartmentalized for better security.

---

## Notifications

- **Settings > Notifications**  
  By default, "Show Previews" is set to always, meaning anyone who picks up your phone can see the content of incoming messages. Set this to **When Unlocked** to limit exposure.

- **Settings > Siri Suggestions**  
  Disable all Siri suggestions across apps and searches to prevent Siri from collecting and sharing your data.

---

## Screen Time and Software Updates

- **Settings > Screen Time**  
  Disable Screen Time. It tracks your activity and usage across apps, essentially logging everything you do on your phone, which is unnecessary for privacy.

- **Settings > General > Software Updates**  
  Disable automatic updates. Review updates manually to ensure they don’t include privacy-invasive features. Enable **Security Responses** for automatic updates but ensure you audit all others yourself.

---

## Handoff, Background App Refresh, and Privacy

- **Settings > General > Handoff**  
  Disable Handoff. This feature allows your devices (i.e., iPhone and Mac) to be deeply interconnected, making it easier for data to be shared across them.

- **Settings > General > Background App Refresh**  
  Disable background app refresh for most apps. This feature allows apps to continue running in the background, fetching data even when you're not actively using them. If needed, allow background refresh for essential apps, like those for real-time services.

---

## Touch ID & Passcode and Privacy

- **Settings > Touch ID & Passcode**  
  Use a strong alphanumeric passcode (12-14 characters). Avoid using common personal information like your name or birthdate. Only enable **Touch ID** for device unlocking, and **disable** Apple Pay and Password AutoFill.

- **Settings > Touch ID & Passcode > Require Passcode Immediately**  
  Set this option to immediately. Disable **Allow Access When Locked** for all options such as Control Center, Wallet, and Notification Center.

- **Settings > Privacy**  
  - **Location Services**: Disable location tracking for apps that don't need it. Particularly for Camera and significant locations. Only enable location tracking for essential apps (e.g., Google Maps) while using them.
  - **System Services**: Turn off **Significant Locations** and other tracking features to stop iOS from storing your location history.
  - **Analytics**: Disable **iPhone Analytics**, **Popular Near Me**, and **Routing & Traffic** to minimize data sharing with Apple.

---

## Data and App Permissions

- **Settings > Privacy**  
  - Review each app’s access to sensitive data like contacts, camera, microphone, etc., and disable unnecessary permissions.
  - **Analytics & Improvements**: Disable analytics to stop sending data to Apple.
  - **Advertising**: Enable **Limit Ad Tracking** and reset your **App Identifier** to reduce targeted advertising.

- **Settings > iTunes & App Store**  
  Disable **App Updates** by default and automatic downloads for things like In-App Ratings and Reviews.

- **Settings > Passwords & Accounts**  
  Avoid using iOS’s built-in password manager. Instead, use a trusted third-party manager like **Bitwarden** or **KeePassium**.

---

## iCloud, SIM Card, and Communication

- **Settings > iCloud**  
  Avoid using iCloud for backups and syncing, as it stores a lot of sensitive data on Apple’s servers. Use iTunes to back up your device locally instead.

- **Settings > Cellular**  
  Enable **SIM PIN** to protect your SIM card in case it's removed from your device.

- **Settings > Messages**  
  Set **Message retention** to 30 days to minimize stored data on your device.

---

## Best Practices for Communication and Browsing

- **SMS and Phone Calls**  
  Avoid SMS for sensitive communication as it's unencrypted and can be intercepted. Use **iMessage** or **Signal** for more secure communication.

- **Search Engines and Browsing**  
  - **Settings > Safari > Search Engine**: Set your default search engine to **DuckDuckGo** to reduce tracking.
  - Use a **VPN** to hide your IP address when browsing and on public Wi-Fi to enhance privacy.
  - Consider using a **privacy-focused DNS provider**. Configure your DNS settings under **Settings > Wi-Fi > Configure DNS**.
  
- **Browsers and Privacy**  
  - Use **DuckDuckGo** for disposable searches and **Orbot** for Tor support on iOS.
  - Be mindful of the attack surface added by extra apps. Regularly clear your browser cache and cookies.

---

## Additional Security Measures

- **SIM Card and Radios**  
  - Disable Bluetooth, NFC, and Wi-Fi when not in use to prevent tracking.
  - Use a **Faraday bag** or **patch** to block all wireless signals when not actively using your phone.

- **Device Usage and Emergency Settings**  
  - **Cover your camera** to prevent potential hacking and camera abuse.
  - Consider using a **privacy screen protector** to protect your display from onlookers.

---

## References

- [Hackers Break Face ID](https://www.wired.com/story/hackers-say-broke-face-id-security/)
- [Feds Force Suspect to Unlock iPhone with Face](https://www.forbes.com/sites/thomasbrewster/2018/09/30/feds-force-suspect-to-unlock-apple-iphone-x-with-their-face/)
- [Biometrics vs. the Fifth Amendment](https://slate.com/technology/2019/01/fifth-amendment-biometrics-fingerprint-search-warrant-ruling.html)
- [Where Fingerprints are Stored on iPhone](https://medium.com/@paulsoham/where-does-my-finger-print-get-stored-in-iphone-b98f1fbe6567)
- [Password Reuse Risks](https://cybernews.com/security/password-reuse-and-the-problems-that-come-with-it/)
- [How Easy It Is To Crack Your Password](https://www.youtube.com/watch?v=K-96JmC2AkE)
- [Why You Shouldn't Use Your ISP's Default DNS Server](https://www.howtogeek.com/664608/why-you-shouldnt-be-using-your-isps-default-dns-server/)
- [Tactics to Secure Your Smartphone Before Joining a Protest](https://www.amnesty.org/en/latest/campaigns/2020/06/tactics-to-secure-phone-before-a-protest/)
