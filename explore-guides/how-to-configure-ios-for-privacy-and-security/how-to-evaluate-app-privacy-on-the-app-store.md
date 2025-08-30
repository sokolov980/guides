# How to Evaluate App Privacy on the App Store

When choosing apps from the App Store, it’s essential to understand the app’s privacy practices. Many free apps collect extensive data, which can be concerning for privacy-conscious users. This guide explains how to evaluate whether an app is privacy-conscious and highlights the trade-offs of using free apps.

---

## Evaluating App Privacy

When searching for an app, it’s critical to examine its privacy settings and understand what data it collects. Here's an example of how to evaluate an app’s privacy practices:

### Example: Decibel Meter App

Let’s say you're looking for a **decibel meter** app. You search for “dbmeter” in the App Store and come across **Decibel: db sound level meter** by Vlad Polyanskiy, which has over 36k ratings and a 4.6-star rating. It seems like a good option, but let’s take a deeper look at the app's privacy settings.

1. **App Privacy Settings**  
   Scroll down to the **App Privacy** section to view the app’s data collection practices. You’ll find two categories:
   
   - **Data Linked to You**  
     This category refers to data that is **linked to your identity**. For this app, the only data collected in this category is **User Content**, meaning anything you upload or record, such as the sounds you capture while using the app. This data can be used by the developer.

   - **Data Not Linked to You**  
     This category refers to data that is **collected but not linked to your identity**. For this app, it includes:
     - **Health & Fitness**
     - **Location**
     - **Usage Data**
     - **Purchases**
     - **Identifiers**
     - **Diagnostics**

     These types of data collection are unnecessary for a simple sound level meter app, suggesting that the app collects more data than necessary.

---

## Comparing Privacy-Conscious Apps: Proton Mail

Now, let’s compare this app to a more privacy-conscious app like **Proton Mail**, which I personally use for email.

1. **App Privacy Settings for Proton Mail**  
   Proton Mail only collects data that is **not linked to your identity**. The only data it collects is **Diagnostics**, which typically refers to anonymous app crash reports and performance data.

2. **Blocking Analytics**  
   Proton Mail allows you to disable analytics collection in its settings. On **macOS**, I use a tool called **Little Snitch** to block any network requests from apps that I trust but want to prevent from calling home for analytics purposes. Unfortunately, Little Snitch isn’t available for iOS, but iOS has a built-in feature called **App Privacy Report**, which can give you insights into the network activity of your installed apps.

---

## Researching Developers and Privacy Policies

Before installing any app, it’s essential to research the app’s developer and review its privacy policy.

1. **App Developer’s Website and Privacy Policy**  
   For example, let’s take a look at the privacy policy of the **Decibel: db sound level meter** app. By visiting the app developer’s website ([Decibel Pro App](https://decibelpro.app/)) and reviewing their privacy policy ([iubenda Privacy Policy](https://iubenda.com/privacy-policy/35911130)), we can see that the app uses **Google Analytics** and **Google Fonts**, meaning the app is sending data to Google. The developer is based in Russia, which may raise concerns due to the country’s privacy laws, which are not as robust as those in other countries.

2. **Jurisdictional Concerns**  
   It’s important to consider where the app developer is located and where your data may be stored. For instance, apps developed in countries like Russia, the US, or Canada might not have strong privacy protection laws. **Proton Mail**, which is based in Switzerland, is a better option in terms of privacy protection.

---

## Example of a Privacy-Conscious App: NIOSH Sound Level Meter

Another alternative is the **NIOSH Sound Level Meter** by EA LAB. This app has decent ratings and, unlike the Decibel app, it does not collect any data.

1. **Privacy-Focused App**  
   The NIOSH app doesn’t collect any data, making it a better option if you’re concerned about privacy. It provides the same functionality as other apps but without the need for excessive data collection.

---

## What If the Developer Claims No Data Collection but Is Actually Collecting Data?

While developers are required by Apple to provide a privacy policy and specify what data they collect, some apps may falsely claim not to collect data when, in fact, they do. 

1. **Apple’s App Store Vetting Process**  
   Apple reviews every app submitted to the App Store, and apps are required to disclose their data collection practices. If an app falsely claims it’s not collecting data when it is, Apple will reject it. However, this doesn’t always guarantee transparency, so it's important to carefully read privacy policies and verify claims.

---

## Conclusion

Before installing apps on your device, it’s crucial to evaluate their privacy practices. Here’s how you can protect your privacy:

- Always check the **App Privacy** section on the App Store.
- Research the developer and understand the country they are based in, as this can affect privacy laws.
- Prefer apps that collect minimal or no data. If possible, choose open-source alternatives where the source code is publicly available.
- Use privacy-focused tools (like **Little Snitch** for macOS) to block unwanted analytics.

By taking these steps, you can make informed decisions about which apps you install, ensuring that your privacy is protected.
