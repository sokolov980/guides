# Installing TailsOS on USB

TailsOS is a Debian-derived operating system designed for privacy and security. It operates as a live OS, meaning that it doesn’t need to be installed on your internal hard drive, and can instead be run directly from a USB flash drive. TailsOS is amnesic, meaning that all data is stored in volatile memory (RAM) and is erased as soon as the system shuts down. By default, all internet traffic is routed through Tor, ensuring user anonymity.

TailsOS is commonly used by privacy-conscious individuals like whistleblowers, journalists, and activists. It helps compartmentalize sensitive use cases away from personal computers, allowing for more secure management of sensitive data, such as PGP keys, encrypted backups, and more.

## Key Features:
- **Amnesic**: All data is erased when the system shuts down.
- **Tor Routing**: All traffic is automatically routed through the Tor network for anonymity.
- **Persistence**: Allows certain files and configurations to be stored in encrypted storage.
- **Privacy-First**: Recommended by the Tor Foundation and the Electronic Frontier Foundation (EFF).

## System Requirements:
- **USB Stick**: Minimum 8 GB of storage
- **RAM**: At least 2 GB of RAM for smooth operation
- **Processor**: 64-bit x86-64b IBM PC compatible processor
- **GPU**: Nvidia or AMD Radeon graphics cards usually do not work in Tails
- **Compatibility**: Tails works on most computers less than 10 years old with Intel processors, but not on newer Macs with Apple processors, smartphones, tablets, or Raspberry Pi.

### Limitations:
- Tails cannot protect you when installing it from an infected computer or running on a system with a compromised BIOS, firmware, or hardware.
- While using Tails, you cannot hide that you're using Tor and Tails, and it won’t protect your communications from highly skilled attackers.
- Do not engage in activities that could reveal your identity while using Tails.

## Step 1: Download TailsOS Image and Verification Files
First, download the latest TailsOS image and its signature from the official [Tails website](https://tails.net/install/download/index.en.html). Save these to your Downloads folder.

### Verify the Download
To ensure that your download is safe and has not been tampered with, verify the downloaded image file:

1. Set the Tails version:

    ```bash
    TAILS_RELEASE_SEMVER=6.18
    ```

    Replace `6.18` with the latest version, if necessary.

2. Download the image signature:

    ```bash
    curl -o ~/Downloads/tails-amd64-$TAILS_RELEASE_SEMVER.img.sig https://tails.boum.org/torrents/files/tails-amd64-$TAILS_RELEASE_SEMVER.img.sig
    ```

3. Import the Tails Public Key:

    ```bash
    curl https://tails.boum.org/tails-signing.key | gpg --import
    ```

4. Verify the image's integrity:

    ```bash
    gpg --verify ~/Downloads/tails-amd64-$TAILS_RELEASE_SEMVER.img.sig
    ```

If the signature does not match the image, it may have been tampered with.

## Step 2: Prepare USB Flash Drive
To copy TailsOS to a USB flash drive, first, identify the device:

1. List all connected disks:

    ```bash
    diskutil list
    ```

2. Unmount the USB drive (replace `n` with your disk number):

    ```bash
    sudo diskutil unmount /dev/diskn
    ```

    If this fails, try:

    ```bash
    sudo diskutil unmountDisk /dev/diskn
    ```

3. Write the image to the USB drive using `dd`:

    ```bash
    sudo dd bs=1m if=$HOME/Downloads/tails-amd64-$TAILS_RELEASE_SEMVER.img of=/dev/rdiskn
    ```

4. Once the image has been written, unmount the disk:

    ```bash
    sudo diskutil unmountDisk /dev/diskn
    ```

## Step 3: Boot Tails from USB
1. Plug the USB flash drive into your computer.
2. For older Macs (e.g., 2015 models), press the `Option` key immediately after powering on to select a boot device.
3. Choose **EFI Boot** to boot into Tails.

### Initial Setup:
When you boot into TailsOS for the first time, you'll be prompted to choose the following:
- **Language**: Select your preferred language.
- **Keyboard Layout**: Choose your keyboard layout.
- **Formats**: Choose your desired time and currency formats.

## Step 4: Set Up Persistent Storage
Tails offers an option for **Persistent Storage**, which lets you store certain data, such as files, Wi-Fi passwords, and browser bookmarks, securely on the USB flash drive. By default, all data is wiped at shutdown, but Persistent Storage allows you to retain information across sessions.

1. After selecting the language and keyboard layout, you will be prompted to enable **Persistent Storage**.
2. Choose **Enable Persistent Storage** and set a **strong passphrase**. This passphrase will be used to unlock your persistent storage each time you boot Tails.
3. You can store data in the Persistent Storage partition, and you can choose whether or not to unlock it each time you boot Tails.

## Step 5: Network Setup and Tor Configuration
Once Tails is up and running, you'll be prompted to connect to a network. It is recommended to use a wired Ethernet connection over Wi-Fi when possible for stability and privacy.

1. **Wi-Fi Setup**: Select your Wi-Fi network and enter the password.
2. **Tor Configuration**: Tails will automatically connect to the Tor network. If necessary, you can configure a Tor bridge to hide your connection to Tor from potential monitors.
3. **Tor Bridges**: If you suspect that someone is monitoring your internet connection, you can choose to use Tor bridges to further hide your traffic.

## Step 6: Additional Settings
After Tails boots up:
- You can configure additional settings like **Wi-Fi** preferences.
- You can also enable the **Welcome Screen** for a smoother startup experience.

## Step 7: Using Tails for Privacy and Anonymity
TailsOS is an excellent tool for ensuring privacy and anonymity, but it's important to remember the limitations of the Tor network:
- Tor is not perfect and cannot protect you from highly skilled attackers.
- Be mindful of your online activities—avoid actions that could compromise your identity.
- Avoid running Tails on a compromised computer, as this would undermine its security.

## Conclusion
TailsOS provides an excellent layer of privacy by ensuring that your activities remain anonymous, while also offering persistent storage options to securely store your sensitive data. Follow these steps to install and configure TailsOS on a USB flash drive and start your journey to more private and secure online activities.
