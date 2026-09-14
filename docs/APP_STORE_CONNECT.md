# PlumpPad — App Store Connect web/privacy checklist

Prepared from the supplied `PlumpPad-iOS-main.zip` and Apple's current published requirements. Checked: **2026-09-14**.

## Recommended localized URLs

Replace `<github-username>` with the GitHub account/organization that owns repository `PlumpPad`.

### Swedish (Sweden)

- Marketing URL: `https://<github-username>.github.io/PlumpPad/sv/`
- Support URL: `https://<github-username>.github.io/PlumpPad/sv/support/`
- Privacy Policy URL: `https://<github-username>.github.io/PlumpPad/sv/privacy/`
- User Privacy Choices URL (optional, but prepared): `https://<github-username>.github.io/PlumpPad/sv/privacy-choices/`

### English (U.S.)

- Marketing URL: `https://<github-username>.github.io/PlumpPad/en/`
- Support URL: `https://<github-username>.github.io/PlumpPad/en/support/`
- Privacy Policy URL: `https://<github-username>.github.io/PlumpPad/en/privacy/`
- User Privacy Choices URL (optional, but prepared): `https://<github-username>.github.io/PlumpPad/en/privacy-choices/`

## App Privacy answer for the supplied build

Based on the inspected project:

- `PrivacyInfo.xcprivacy` declares `NSPrivacyCollectedDataTypes` as empty.
- `NSPrivacyTracking` is `false`.
- No tracking domains are declared.
- No third-party Swift package dependencies are present in the Xcode project.
- No networking APIs, analytics SDKs, advertising SDKs, account/authentication SDKs or CloudKit use were found in the supplied source.
- SwiftData stores resumable games and reusable player names locally.
- UserDefaults / `@AppStorage` stores local preferences; the privacy manifest declares required-reason API category `NSPrivacyAccessedAPICategoryUserDefaults` with reason `CA92.1`.

For this exact reviewed build, the App Store Connect App Privacy questionnaire should therefore be answered:

**“No, we do not collect data from this app.”**

Re-check this answer before every release if code, SDKs, networking, crash reporting, analytics, advertisements, accounts, cloud sync, or support tooling is added.

## What Apple currently requires

1. **Privacy Policy URL:** required for iOS apps. The policy must identify collected data (if any), uses, third-party sharing/protection, retention/deletion, and how consent can be revoked or data deletion handled.
2. **App Privacy disclosure:** required for new apps and updates. If neither the developer nor third-party partners collect data from this build, App Store Connect allows “No, we do not collect data from this app.”
3. **Support URL:** required and localizable. Apple's current help text says the URL must lead to actual contact information (legal address, email address or telephone number), as required by local law, for app issues, feedback and feature requests.
4. **Marketing URL:** optional and localizable. The prepared home pages can be used.
5. **User Privacy Choices URL:** optional. Pages are prepared because they make local deletion/retention controls clear.
6. **Privacy link inside the app:** App Review Guideline 5.1.1(i) requires an easily accessible privacy-policy link inside the app as well as the App Store Connect metadata field.
7. **License Agreement:** a custom EULA is optional. If none is supplied, Apple's Standard EULA applies.

## Release blocker found in the supplied app

The current SwiftUI Settings screen contains a privacy explanation but no visible link to the public privacy policy. Before App Review, add an easily accessible in-app `Link` to the deployed privacy URL (and ideally Support as well). This is required by App Review Guideline 5.1.1(i).

Because the developer's GitHub username is not known inside the static Swift project, add the final deployed URL after the repository owner is known, for example:

```swift
Link("Privacy Policy", destination: URL(string: "https://<github-username>.github.io/PlumpPad/en/privacy/")!)
```

For a localized in-app destination, either link to a language-neutral landing route that lets the user choose language, or resolve `/sv/privacy/` vs `/en/privacy/` based on the app language.

## Important Support URL caveat

The website intentionally contains **no direct email address**, per project requirement, and instead routes users to GitHub Issues in repository `PlumpPad`.

Apple's current App Store Connect help explicitly says a Support URL must lead to “actual contact information (legal address, email address, telephone number), as may be required by local law.” GitHub Issues provides a real support channel but is not one of Apple's listed contact-information examples. Therefore this package cannot truthfully guarantee that an Issues-only page satisfies Apple's wording in every storefront or legal jurisdiction.

To eliminate that submission risk without publishing an email address, add a real legal postal address or telephone number to the Support page if appropriate for the developer and applicable law. Do not invent one.


## EU Digital Services Act (DSA)

App Store Connect requires you to declare whether the developer is a **trader** for DSA purposes. This declaration is separate from the website.

- If you are **not a trader**, Apple says no trader contact information is required for display, but you still need to declare the status.
- If you **are a trader** and distribute in the EU, Apple requires verified contact information for display on the App Store product page. For organizations this includes phone number and email address (the D-U-N-S address is used); for individuals it includes address/P.O. Box, phone number and email address.

This means the website can remain free of a direct email address as requested, but an EU trader cannot avoid Apple displaying the required trader contact information on the App Store product page. Determine trader status based on your actual legal/commercial situation; do not choose a status merely to avoid publishing contact details.

## GitHub Pages publishing

GitHub officially supports publishing from `/docs` on a selected branch. Configure **Settings → Pages → Deploy from a branch → `/docs`**.

## Official references

- Apple — App privacy / Privacy Policy URL: https://developer.apple.com/help/app-store-connect/reference/app-information/app-privacy
- Apple — Manage app privacy: https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy
- Apple — Platform version information / Support URL: https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information
- Apple — App Review Guidelines §5.1.1: https://developer.apple.com/app-store/review/guidelines/
- Apple — EU DSA trader requirements: https://developer.apple.com/help/app-store-connect/manage-compliance-information/manage-european-union-digital-services-act-trader-requirements
- Apple — Standard EULA behavior: https://developer.apple.com/help/app-store-connect/manage-app-information/provide-a-custom-license-agreement
- Apple — Standard EULA: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
- GitHub — Configure a Pages publishing source: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
