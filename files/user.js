/****************************************************************************
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
* NULLTRACE: A Custom Hardened User.js Configuration
*
* This configuration provides a private, secure, and isolated browsing
* environment. It focuses on preventing data leaks, resisting tracking,
* and minimizing the browser's exposure to potential threats.
*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
****************************************************************************/

/* INDEX:
 *
 * 0000: INITIAL SETUP & UI CLEANUP
 * 0100: DISK AVOIDANCE & SESSION CONTROL
 * 0200: NETWORK & DNS HARDENING
 * 0300: PRIVACY & HISTORY
 * 0400: EXTREME HARDENING (POTENTIAL FOR BREAKAGE)
 * 0500: FINGERPRINTING RESISTANCE
 * 0600: TELEMETRY & DATA COLLECTION
 * 0700: GENERAL SETTINGS
 *
 * /

/* 0000: INITIAL SETUP & UI CLEANUP */
user_pref("_user.js.custom", "This browser is a controlled environment.");
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("app.normandy.enabled", false);

---

/* 0100: DISK AVOIDANCE & SESSION CONTROL */
user_pref("browser.cache.disk.enable", false); // Prevents writing data to disk.
user_pref("browser.cache.memory.enable", false); // Disables the memory cache.
user_pref("browser.cache.memory.capacity", 0);
user_pref("browser.sessionstore.privacy_level", 2); // Prevents session data from being saved.
user_pref("browser.sessionstore.max_tabs_undo", 0);
user_pref("browser.sessionstore.resume_from_crash", false);
user_pref("browser.privatebrowsing.autostart", true); // Always start in a private browsing session.
user_pref("privacy.sanitize.sanitizeOnShutdown", true); // Clear all data on shutdown.
user_pref("privacy.clearOnShutdown_v2.cache", true);
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true);
user_pref("privacy.clearOnShutdown_v2.downloads", true);
user_pref("privacy.clearOnShutdown_v2.formdata", true);
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true);
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("browser.download.start_downloads_in_tmp_dir", true); // Save downloads to a temp folder.
user_pref("browser.helperApps.deleteTempFileOnExit", true); // Delete temp files on exit.

---

/* 0200: NETWORK & DNS HARDENING */
user_pref("network.http.referer.XOriginTrimmingPolicy", 2); // Restrict referrer headers to same-site.
user_pref("network.http.speculative-parallel-limit", 0); // Disable speculative pre-connections.
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("network.trr.mode", 5); // Disable DNS over HTTPS.
user_pref("network.dns.disableIPv6", true); // Prevent IPv6 leaks.
user_pref("media.peerconnection.ice.no_host", true); // Prevent WebRTC from leaking a local IP.

---

/* 0300: PRIVACY & HISTORY */
user_pref("signon.rememberSignons", false); // Disable password saving.
user_pref("signon.autofillForms", false); // Disable form autofill.
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("places.history.enabled", false); // Disable browsing history.
user_pref("browser.urlbar.maxRichResults", 0); // Disable URL bar history and suggestions.
user_pref("browser.urlbar.autoFill", false);
user_pref("keyword.enabled", false); // Disable URL bar typo searching.
user_pref("browser.safebrowsing.malware.enabled", false); // Disable Safe Browsing.
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.contentblocking.category", "strict"); // Enable strict tracking protection.
user_pref("dom.security.https_only_mode", true); // Enforce HTTPS for all connections.
user_pref("dom.security.https_only_mode_pbm", true);
user_pref("permissions.default.geo", 2); // Block all geolocation requests.
user_pref("permissions.default.desktop-notification", 2); // Block all push notifications.
user_pref("dom.event.contextmenu.enabled", false); // Prevent websites from controlling the right-click menu.
user_pref("browser.formfill.enable", false); // Disable form autofill (same as signon.autofillForms, but added for completeness).

---

/* 0400: EXTREME HARDENING (POTENTIAL FOR BREAKAGE) */
user_pref("javascript.options.ion", false); // Disable Ion JIT compiler.
user_pref("javascript.options.baselinejit", false); // Disable Baseline JIT compiler.
user_pref("javascript.options.wasm", false); // Disable WebAssembly.
user_pref("media.eme.enabled", false); // Disable Encrypted Media Extensions (DRM).
user_pref("gfx.font_rendering.opentype_svg.enabled", false); // Disable OpenType SVG font rendering.
user_pref("svg.disabled", true); // Disable in-content SVG.
user_pref("webgl.disabled", true); // Disable WebGL.
user_pref("plugin.scan.plid.all", false); // Disable plugin scanning.

---

/* 0500: FINGERPRINTING RESISTANCE */
user_pref("privacy.resistFingerprinting", true); // Enable the core fingerprinting resistance suite.
user_pref("privacy.resistFingerprinting.letterboxing", true); // Use letterboxing to standardize window size.
user_pref("privacy.spoof_english", 1); // Spoof the browser language to "en-US".
user_pref("security.ssl.disable_session_identifiers", true); // Disable SSL session identifiers.

---

/* 0600: TELEMETRY & DATA COLLECTION */
user_pref("datareporting.policy.dataSubmissionEnabled", false); // Disable all data submissions.
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,"); // Nullify the telemetry server URL.
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.pingcentre.telemetry", false);
user_pref("devtools.onboarding.telemetry-logged", false);
user_pref("media.wmf.deblacklisting-for-telemetry-in-gpu-process", false);
user_pref("toolkit.telemetry.bhrping.enabled", false);
user_pref("toolkit.telemetry.firstshutdownping.enabled", false);
user_pref("toolkit.telemetry.hybridcontent.enabled", false);
user_pref("toolkit.telemetry.newprofileping.enabled", false);
user_pref("toolkit.telemetry.updateping.enabled", false);
user_pref("toolkit.telemetry.shutdownpingsender.enabled", false);

---

/* 0700: GENERAL SETTINGS */
user_pref("devtools.chrome.enabled", true); // Enable debugging for browser UI and extensions.
user_pref("devtools.debugger.remote-enabled", true); // Enable remote debugging.
user_pref("devtools.inspector.showUserAgentStyles", true); // Show user agent styles in the inspector.
user_pref("security.ssl.errorReporting.enabled", true); // Provide detailed SSL/TLS error reports.
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.tls.version.min", 3);
user_pref("security.tls.version.max", 4);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.ssl.enable_false_start", false);
