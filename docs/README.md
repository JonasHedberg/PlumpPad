# PlumpPad – GitHub Pages (`docs/`)

Det här är en komplett, statisk webbplats för iOS-appen **PlumpPad**. Den är baserad på `PlumpPad-iOS-multirules.zip` från 27 oktober 2026 och omfattar tolv språkversioner av landningssidor, integritetspolicy, support, dataval/radering, spelregler för tolv förinställda varianter, egna husregler och användningsvillkor.

**Upphovsrätt:** © 2026 Jonas Hedberg.

## Publicera från repositoryt PlumpPad

1. Packa upp arkivet så att mappen `docs/` hamnar **direkt i roten** av repositoryt [JonasHedberg/PlumpPad](https://github.com/JonasHedberg/PlumpPad). Behåll mappstrukturen.
2. Committa och pusha ändringarna till `main` (eller den branch som används).
3. Öppna GitHub → **PlumpPad → Settings → Pages**.
4. Under **Build and deployment**, välj **Deploy from a branch**. Välj **main** och mappen **`/docs`**, därefter **Save**.
5. Vänta på publiceringen och kontrollera att URL:erna nedan fungerar från en utloggad webbläsare. GitHub Pages kan behöva några minuter.
6. Kontrollera att **Issues** är aktiverat under Settings → General → Features, eftersom det är sajtens enda supportkanal.
7. Uppdatera App Store Connect enligt `APP_STORE_CONNECT.md`. **Ingen direkt e-postadress anges på webbplatsen.**

## Publika webbadresser och språk

Språkval: `https://jonashedberg.github.io/PlumpPad/`. Varje språk har **startsida, spelregler, integritetspolicy, support, dataval/radering och användningsvillkor**. Följ samma URL-struktur för alla sex sidtyper.

| Språk | Kod | Startsida | Privacy Policy | Support |
|---|---|---|---|---|
| Svenska | `sv` | `https://jonashedberg.github.io/PlumpPad/sv/` | `https://jonashedberg.github.io/PlumpPad/sv/privacy/` | `https://jonashedberg.github.io/PlumpPad/sv/support/` |
| English | `en` | `https://jonashedberg.github.io/PlumpPad/en/` | `https://jonashedberg.github.io/PlumpPad/en/privacy/` | `https://jonashedberg.github.io/PlumpPad/en/support/` |
| Deutsch | `de` | `https://jonashedberg.github.io/PlumpPad/de/` | `https://jonashedberg.github.io/PlumpPad/de/privacy/` | `https://jonashedberg.github.io/PlumpPad/de/support/` |
| Français | `fr` | `https://jonashedberg.github.io/PlumpPad/fr/` | `https://jonashedberg.github.io/PlumpPad/fr/privacy/` | `https://jonashedberg.github.io/PlumpPad/fr/support/` |
| Español | `es` | `https://jonashedberg.github.io/PlumpPad/es/` | `https://jonashedberg.github.io/PlumpPad/es/privacy/` | `https://jonashedberg.github.io/PlumpPad/es/support/` |
| Italiano | `it` | `https://jonashedberg.github.io/PlumpPad/it/` | `https://jonashedberg.github.io/PlumpPad/it/privacy/` | `https://jonashedberg.github.io/PlumpPad/it/support/` |
| Polski | `pl` | `https://jonashedberg.github.io/PlumpPad/pl/` | `https://jonashedberg.github.io/PlumpPad/pl/privacy/` | `https://jonashedberg.github.io/PlumpPad/pl/support/` |
| Nederlands | `nl` | `https://jonashedberg.github.io/PlumpPad/nl/` | `https://jonashedberg.github.io/PlumpPad/nl/privacy/` | `https://jonashedberg.github.io/PlumpPad/nl/support/` |
| Dansk | `da` | `https://jonashedberg.github.io/PlumpPad/da/` | `https://jonashedberg.github.io/PlumpPad/da/privacy/` | `https://jonashedberg.github.io/PlumpPad/da/support/` |
| Norsk bokmål | `nb` | `https://jonashedberg.github.io/PlumpPad/nb/` | `https://jonashedberg.github.io/PlumpPad/nb/privacy/` | `https://jonashedberg.github.io/PlumpPad/nb/support/` |
| Suomi | `fi` | `https://jonashedberg.github.io/PlumpPad/fi/` | `https://jonashedberg.github.io/PlumpPad/fi/privacy/` | `https://jonashedberg.github.io/PlumpPad/fi/support/` |
| Português (Portugal) | `pt-PT` | `https://jonashedberg.github.io/PlumpPad/pt-PT/` | `https://jonashedberg.github.io/PlumpPad/pt-PT/privacy/` | `https://jonashedberg.github.io/PlumpPad/pt-PT/support/` |

Övriga undersidor finns på `rules/`, `privacy-choices/` och `terms/` under respektive språkväg. Webbplatsen fungerar utan JavaScript eller cookies och använder `hreflang`-taggar och `sitemap.xml` för samtliga språk.

**Skärmbilder:** Den senaste bifogade Swift-versionen innehåller App Store-bilder endast på svenska och engelska. Dessa originalbilder används för respektive språk; övriga tio språkversioner använder de engelska bilderna och förklarar detta i bildsektionen. Allt löpande innehåll på respektive sida är däremot lokaliserat.

## Tekniskt

- Webbplatsen körs direkt på GitHub Pages utan byggverktyg, serverfunktioner, externa typsnitt, tredjepartsskript, besöksspårning eller egna cookies.
- Tillgänglig navigering, fokusmarkeringar, responsiv design, ljust/mörkt färgtema, färdig favicon och Apple Touch Icon.
- Appikonerna `assets/icons/AppIcon-Light.png`, `AppIcon-Dark.png`, `AppIcon-Tinted.png` är oförändrade kopior av den bifogade appens 1024×1024-källfiler. Mindre WebP-bilder används på själva sidan.
- Skärmbilderna i `assets/screenshots/` är proportionellt nedskalade och optimerade kopior av svenska och engelska iPhone-bilder i Swift-projektets `AppStore/Assets/`. Alla åtta appvyer finns för vartdera språket.
- Interna länkar är anpassade för **projektwebbplatsen `/PlumpPad/`**, inte domänroten. Om repositoryt flyttas, uppdatera URL:erna i webbplatsen.
- Ingen automatiskt insamlad användardata via webbplatsens egen kod. GitHub Pages/GitHub Issues är GitHubs tjänster och omfattas av GitHubs integritetspolicy.

## Observera före App Review

**En offentlig webbplats räcker inte ensam för fullgod App Store-publicering.** Se `APP_STORE_CONNECT.md` för två viktiga hinder: den aktuella appen saknar länk till den publika integritetspolicyn *inne i iOS-appen*, och Apple kan kräva kontaktinformation på supportsidan eller för EU/DSA-traders. GitHub Issues är inbyggt enligt önskemål, men det är inte möjligt att garantera att detta ensamt uppfyller alla kontaktskyldigheter.

## Uppdatering 27 oktober 2026 – multirules

- Granskad källkod: `PlumpPad-iOS-multirules.zip`, särskilt `Rules/GameRules.swift`, `Rules/PlumpRules.swift`, `Views/NewGameView.swift`, `Views/HouseRulesView.swift`, `Views/SettingsView.swift`, `Models/PersistedGame.swift` och `Views/FinalResultsView.swift`.
- Webbplatsens regelbeskrivning skiljer nu mellan svensk grundprofil, ytterligare elva förinställningar och användarens egna husregler. Profilernas benämningar är **appens tekniska benämningar**, inte certifierade landsregler.
- **Språkgranskning 28 oktober 2026:** Appens `Localizable.xcstrings` innehåller 12 språklokaliseringar. Webbplatsen har nu alla sex innehållssidor på svenska, engelska, tyska, franska, spanska, italienska, polska, nederländska, danska, norska bokmål, finska och portugisiska (Portugal).
- Nya skärmbilder visar bland annat Nytt spel, Husregler och Historik.
- Sparade regeluppsättningar dokumenteras i integritet och dataval. Den granskade appen har ingen separat raderingslista för dessa.
- Den ljusa appikonen visas överallt på sajten. Originalfilerna för Normal/Dark/Tinted finns kvar i `assets/icons/`.
- Ingen direkt e-post publiceras. GitHub Issues används för support. Den borttagna länken till själva repositoryt är fortsatt borttagen från sidfotens Informationskolumn.

**Separat appgranskning behövs:** Husregelväljaren låter användaren ställa in upp till tio spelare, medan skärmen för nya spel bara har plats för åtta namn. Alternativet för samtidig budgivning går att välja, men budgivningsgränssnittet använder fortfarande turordning. Dessa är potentiella kod-/UX-brister i Swift-appen; `docs/` kan inte rätta dem. Se `APP_STORE_CONNECT.md`.

## Uppdatering 28 oktober 2026 – tolv språk

- Verifierat `Localizable.xcstrings` i `PlumpPad-iOS-multirules.zip`: `sv`, `en`, `de`, `fr`, `es`, `it`, `pl`, `nl`, `da`, `nb`, `fi`, `pt-PT`.
- 72 lokaliserade innehållssidor: sex per språk, plus gemensam språkvalsstartsida.
- Anpassad språkmeny med direktnavigering till samma dokumenttyp i valt språk; även sidornas `lang`, `hreflang`, kanoniska URL:er, Open Graph och sitemap har uppdaterats.
- Sektioner för poängmodeller och alla tolv regelprofiler finns på varje språks regelsida. Formelnotationen är språkoberoende.
- Support via GitHub Issues, © 2026 Jonas Hedberg och den ljusa appikonen är oförändrade.
- Skärmbilder saknas i Swift-underlaget på andra språk än svenska och engelska; inga nya appskärmbilder har hittats på.
