# App Store Connect – PlumpPad: publiceringschecklista

**Kontrollerad:** 27 oktober 2026  
**Underlag:** uppladdade `PlumpPad-iOS-multirules.zip`, Apples publicerade dokumentation och GitHub Pages-dokumentation. Detta dokument är vägledning, inte en garanti om godkännande av Apple.

## 1. Fält med färdiga URL:er

| App Store Connect-fält | Svenska (sv-SE) | Engelska (en-US) | Status |
|---|---|---|---|
| **Privacy Policy URL** | `https://jonashedberg.github.io/PlumpPad/sv/privacy/` | `https://jonashedberg.github.io/PlumpPad/en/privacy/` | **Obligatorisk** |
| **Support URL** | `https://jonashedberg.github.io/PlumpPad/sv/support/` | `https://jonashedberg.github.io/PlumpPad/en/support/` | **Obligatorisk** |
| Marketing URL | `https://jonashedberg.github.io/PlumpPad/sv/` | `https://jonashedberg.github.io/PlumpPad/en/` | Valfri |
| User Privacy Choices URL | `https://jonashedberg.github.io/PlumpPad/sv/privacy-choices/` | `https://jonashedberg.github.io/PlumpPad/en/privacy-choices/` | Valfri |

**Viktigt:** URL:erna är korrekta för repositoryt `JonasHedberg/PlumpPad` men får **inte** anges som fungerande förrän sajten verkligen publicerats och kontrollerats anonymt/utloggat. GitHub Pages bygger ofta webbplatsen efter commit.

### Copyright-fältet

Ange i **App Store Connect**: `2026 Jonas Hedberg` — **utan** copyrightsymbol eftersom Apple själv lägger till ©. På webbplatsen visas däremot exakt **© 2026 Jonas Hedberg**.

## 2. Granskat i Swift-källkoden

- Bundle-ID: `se.jonashedberg.plumppad`.
- iOS och iPadOS, lägsta version iOS 26.0; 12 språklokaliseringar (`sv`, `en`, `de`, `fr`, `es`, `it`, `pl`, `nl`, `da`, `nb`, `fi`, `pt-PT`).
- Appens svenska grundprofil stöder 2–8 spelare. Ytterligare elva regelprofiler och anpassningsbara husregler ingår; budspärr och poäng beror på vald regeluppsättning. Själva sticktagningen registreras av användaren.
- SwiftData-modeller: `PersistedGame` (pågående/avslutade spel) och `SavedPlayer` (sparade namn) och `SavedRuleSet` (namngivna husregler).
- Inställningar i `@AppStorage` / `UserDefaults` (bland annat valfri historik).
- PDF-generering/utskrift via systemets utskriftsfunktioner; CSV-export via iOS share sheet.
- Inga nätverksanrop i granskad appkod; inga annonser, tredjepartsanalysverktyg, kontofunktioner eller spårnings-SDK:er i källkoden.
- `PrivacyInfo.xcprivacy` anger `NSPrivacyTracking = false`, inga insamlade datatyper och required-reason `NSPrivacyAccessedAPICategoryUserDefaults` / `CA92.1`.

### App Privacy i App Store Connect

För **den granskade versionen** talar underlaget för:

- **Data collection:** “No, we do not collect data from this app.”
- **Tracking:** No.
- **Third-party analytics:** No.
- **Third-party ads:** No.

Detta avser datainsamling genom **appen** av utvecklaren eller dess tredjepartsleverantörer. Apple definierar detta separat från lokal lagring. Användarinitierade utskrifter och exporter innebär inte i sig att utvecklaren tar emot data, men mottagaren behandlar naturligtvis filen enligt sin egen policy. **Bekräfta alltid svaren mot den faktiska produktionsbuilden**.

## 3. Två återstående krav att åtgärda

### A. Offentlig integritetspolicy ska länkas *i appen* (viktigt)

Apple App Review Guidelines **5.1.1(i)** kräver en lättillgänglig länk till policyn både i App Store Connect och inne i appen. I uppladdad `PlumpPad/Views/SettingsView.swift` finns en lokal `PrivacyPolicyView` med text, men ingen `Link`/`openURL` till den publika policyn.

**Åtgärd i Swiftprojektet innan inskick:** lägg till en synlig URL-länk under Inställningar → Integritetspolicy, lämpligen en adress till rätt språkversion av `/privacy/` (eller en publik standardsida som låter användaren välja språk), och testkör i iPhone/iPad med internetåtkomst.

### B. Ingen direkt e-postadress – kontaktkravet kan inte garanteras

Webbplatsen använder **endast GitHub Issues** för att kontakta apputvecklaren, enligt önskemål. Apple App Store Connect beskriver att Support URL ska leda till faktisk kontaktinformation (juridisk adress, e-postadress eller telefonnummer) när tillämplig lag kräver det. Guideline **1.5 Developer Information** anger att användare ska ha ett enkelt sätt att kontakta utvecklaren.

**Bedömning:** GitHub Issues är en fungerande ärendeväg men kan **inte garanteras** uppfylla Apples tolkning eller lagstadgade kontaktkrav, särskilt om GitHub-inloggning krävs. Vi har inte hittat på kontaktinformation; publiceringsrisken kvarstår. Ett separat App Review-kontaktfält kan fortfarande kräva kontaktuppgifter som bara Apple ser.

## 4. EU Digital Services Act (DSA)

Deklarera trader-status i App Store Connect. Om du är **trader** och distribuerar i EU kräver Apple normalt att adress, telefon och e-post verifieras och visas på App Store-produktsidan. Om du är **non-trader** krävs inte dessa trader-uppgifter, men status ska ändå deklareras. Du avgör rätt status utifrån din verksamhet och Apples kriterier.

Att webbplatsen inte visar e-post betyder **inte** att trader-kravet automatiskt är undantaget. Ange inte en felaktig status för att undvika exponering av kontaktuppgifter.

## 5. Vad webbplatsen tillhandahåller

- Publik integritetspolicy på 12 språk (obligatorisk).
- Supportsida på 12 språk med fungerande GitHub Issues-länkar (obligatorisk Support URL; se förbehåll ovan).
- Startsida/marknadsförings-URL (valfri).
- Privacy Choices/data deletion-sida (valfri; lämplig för tydlighet).
- Villkor med länk till Apples Standard EULA (extra, inte ett uttryckligt generellt krav på separat Terms URL).
- Regelbeskrivning och vanliga frågor (extra).
- App Store copyright `2026 Jonas Hedberg`.

## 6. Övrigt inför App Review (ingår inte i webbplatsen)

- [ ] Bygg och testa i Xcode på riktig simulator/iPhone/iPad.
- [ ] Kontrollera `App Store Connect` → App Information: bundle-ID, kategori, åldersklassificering, territorier, content rights och DSA.
- [ ] Ange **App Review contact** (separat kontaktinformation, inte offentlig supportsida; Apple kan kräva namn, telefon och e-post).
- [ ] Slutför App Privacy-formuläret utifrån senast signerade builden.
- [ ] Verifiera export compliance och eventuella andra lagliga deklarationer som App Store Connect kräver.
- [ ] Ladda upp lämpliga skärmbilder, lokaliserad beskrivning/nyckelord och den faktiska builden.
- [ ] Åtgärda länken till den publika integritetspolicyn inne i Swift-appen.
- [ ] Publicera `docs/`; testa samtliga 12 språkversioner och deras Privacy/Support-URL:er anonymt.
- [ ] Kontrollera att GitHub Issues är aktiverat, öppet och bevakas.
- [ ] Bedöm om GitHub Issues ensamt duger för Support URL enligt Apple och lokal lag.
- [ ] Ange copyrightfältet `2026 Jonas Hedberg` (Apple lägger till © automatiskt).

## Officiella källor (kontrollerade 2026-10-20)

1. Apple – [App Store Connect: Platform version information](https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information) (Support URL, copyright, App Review contact).
2. Apple – [App privacy](https://developer.apple.com/help/app-store-connect/reference/app-privacy/) (obligatorisk integritetspolicy, valfri privacy choices).
3. Apple – [Manage app privacy](https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy).
4. Apple – [App Review Guidelines, särskilt 1.5 och 5.1.1](https://developer.apple.com/app-store/review/guidelines/).
5. Apple – [EU Digital Services Act trader requirements](https://developer.apple.com/help/app-store-connect/manage-compliance-information/manage-european-union-digital-services-act-trader-requirements).
6. GitHub – [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 7. Extra kontrollpunkter för multirules-versionen (27 oktober 2026)

- [ ] Verifiera samtliga tolv förinställda regelprofiler på riktig iOS-enhet, särskilt negativa poäng, Clag specialgiv 9/15 och 7-truf.
- [ ] Avgränsa spelarmängden i husregler till vad Nytt spel stöder, eller utöka namnlistan: `HouseRulesView.swift` kan välja max 10, medan `NewGameView.swift` håller en namnlista för 8 spelare. Kontrollera kraschrisken om 9–10 väljs.
- [ ] Kontrollera ”Simultaneous reveal”: `GameRules.biddingStyle` kan vara `.simultaneous` men `BiddingView`/`PlumpRules.currentBidderIndex` implementerar fortfarande löpande budgivning. Antingen implementera faktisk samtidig budgivning eller märk alternativet tydligt.
- [ ] Kontrollera förhandsvisning av poäng i `ScoringView.swift`: den använder `PlumpRules.score(bid:tricks:)` (svensk standard), medan `finalizeCurrentRound` använder `game.effectiveRules.score`. För övriga regelprofiler kan visad preliminär poäng avvika från slutpoäng.
- [ ] Överväg hantering för att radera `SavedRuleSet` utan ominstallation; nu finns uppdatering/överskrivning men ingen separat borttagningsvy.
- [ ] Uppdatera den inbyggda allmänna `RulesView` så att användaren inte tolkar enbart svensk standard som reglerna för pågående alternativ profil.
- [ ] Den offentliga privacy-länken i själva appen saknas fortfarande i `SettingsView.swift` enligt denna granskning. Krävs enligt Apple 5.1.1.

Dessa punkter är observationer från källkod; de har **inte** verifierats i iOS-simulator eller på fysisk enhet här.

## 8. Språklokaliseringar i senaste appversionen (28 oktober 2026)

**Korrigering:** Den tidigare anteckningen om att appen bara stöder svenska och engelska var fel. `PlumpPad/Localizable.xcstrings` har lokaliseringsposter för `sv`, `en`, `de`, `fr`, `es`, `it`, `pl`, `nl`, `da`, `nb`, `fi` och `pt-PT`. Vissa poster är markerade som maskinöversatta i Xcode och bör språkgranskas före publicering.

På GitHub Pages finns följande **sex sidor per språk**: startsida, regler, integritet, support, dataval och användningsvillkor. Använd `https://jonashedberg.github.io/PlumpPad/<språkkod>/privacy/` respektive `/support/` för respektive lokalisering i App Store Connect, när den publicerade sajten är testad.

Kontrollera även att Swift-appens länkar öppnar motsvarande språkversioner. Webbplatsen är klar för att stödja detta, men Swift-projektet har inte ändrats i denna leverans.
