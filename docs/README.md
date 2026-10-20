# PlumpPad – GitHub Pages (`docs/`)

Det här är en komplett, statisk webbplats för iOS-appen **PlumpPad**. Den är baserad på `PlumpPad-iOS-main.zip` från oktober 2026 och omfattar svenska och engelska landningssidor, integritetspolicy, support, dataval/radering, spelregler och användningsvillkor.

**Upphovsrätt:** © 2026 Jonas Hedberg.

## Publicera från repositoryt PlumpPad

1. Packa upp arkivet så att mappen `docs/` hamnar **direkt i roten** av repositoryt [JonasHedberg/PlumpPad](https://github.com/JonasHedberg/PlumpPad). Behåll mappstrukturen.
2. Committa och pusha ändringarna till `main` (eller den branch som används).
3. Öppna GitHub → **PlumpPad → Settings → Pages**.
4. Under **Build and deployment**, välj **Deploy from a branch**. Välj **main** och mappen **`/docs`**, därefter **Save**.
5. Vänta på publiceringen och kontrollera att URL:erna nedan fungerar från en utloggad webbläsare. GitHub Pages kan behöva några minuter.
6. Kontrollera att **Issues** är aktiverat under Settings → General → Features, eftersom det är sajtens enda supportkanal.
7. Uppdatera App Store Connect enligt `APP_STORE_CONNECT.md`. **Ingen direkt e-postadress anges på webbplatsen.**

## Publika webbadresser

| Syfte | Svenska | English |
|---|---|---|
| Startsida / Marketing | https://jonashedberg.github.io/PlumpPad/sv/ | https://jonashedberg.github.io/PlumpPad/en/ |
| Privacy Policy (obligatorisk) | https://jonashedberg.github.io/PlumpPad/sv/privacy/ | https://jonashedberg.github.io/PlumpPad/en/privacy/ |
| Support (obligatorisk) | https://jonashedberg.github.io/PlumpPad/sv/support/ | https://jonashedberg.github.io/PlumpPad/en/support/ |
| Privacy Choices (valfri) | https://jonashedberg.github.io/PlumpPad/sv/privacy-choices/ | https://jonashedberg.github.io/PlumpPad/en/privacy-choices/ |
| Villkor / Terms | https://jonashedberg.github.io/PlumpPad/sv/terms/ | https://jonashedberg.github.io/PlumpPad/en/terms/ |
| Spelregler / Rules | https://jonashedberg.github.io/PlumpPad/sv/rules/ | https://jonashedberg.github.io/PlumpPad/en/rules/ |

Ingången `https://jonashedberg.github.io/PlumpPad/` ger ett enkelt språkval utan JavaScript eller cookies. Svenska och engelska har separata indexerbara sidor och språklänkar.

## Tekniskt

- Webbplatsen körs direkt på GitHub Pages utan byggverktyg, serverfunktioner, externa typsnitt, tredjepartsskript, besöksspårning eller egna cookies.
- Tillgänglig navigering, fokusmarkeringar, responsiv design, ljust/mörkt färgtema, färdig favicon och Apple Touch Icon.
- Appikonerna `assets/icons/AppIcon-Light.png`, `AppIcon-Dark.png`, `AppIcon-Tinted.png` är oförändrade kopior av den bifogade appens 1024×1024-källfiler. Mindre WebP-bilder används på själva sidan.
- Skärmbilderna i `assets/screenshots/` är nedskalade versioner av de lokaliserade iPhone-bilderna i Swift-projektets `AppStoreConnect/screenshots/`.
- Interna länkar är anpassade för **projektwebbplatsen `/PlumpPad/`**, inte domänroten. Om repositoryt flyttas, uppdatera URL:erna i webbplatsen.
- Ingen automatiskt insamlad användardata via webbplatsens egen kod. GitHub Pages/GitHub Issues är GitHubs tjänster och omfattas av GitHubs integritetspolicy.

## Observera före App Review

**En offentlig webbplats räcker inte ensam för fullgod App Store-publicering.** Se `APP_STORE_CONNECT.md` för två viktiga hinder: den aktuella appen saknar länk till den publika integritetspolicyn *inne i iOS-appen*, och Apple kan kräva kontaktinformation på supportsidan eller för EU/DSA-traders. GitHub Issues är inbyggt enligt önskemål, men det är inte möjligt att garantera att detta ensamt uppfyller alla kontaktskyldigheter.
