import { Header } from "@codegouvfr/react-dsfr/Header";
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { useIsDark, fr } from "@codegouvfr/react-dsfr";
import { SwitchColorTheme } from "@codegouvfr/react-dsfr/SwitchColorTheme";

export function App() {
    const { isDark, setIsDark } = useIsDark();

    return (
        <>
            <Header
                intituléOfficiel="Intitulé officiel"
                baselinePrécisionsSurLorganisation="baseline - Précision sur l'organisation"
                nomDuSiteSlashService="Nom du site / service"
                links={[
                    {
                        "text": "Créer un espace",
                        "iconId": "fr-icon-add-circle-line",
                        "href": "#"
                    },
                    {
                        "text": "Se connecter",
                        "iconId": "fr-icon-lock-line",
                        "href": "#"
                    },
                    {
                        "text": "S'enregistrer",
                        "iconId": "fr-icon-account-line",
                        "href": "#"
                    }
                ]}
            />

            <Alert
                isClosable={true}
                severity="success"
                title="Success: This is the title"
                description="This is the description"
            />

            <button className={fr.cx("fr-btn", "fr-icon-checkbox-circle-line", "fr-btn--icon-left")}>
                Label bouton MD
            </button>
            <span className="fr-icon-ancient-gate-fill" aria-hidden="true"></span>
            <i className="fr-icon-ancient-gate-fill" aria-hidden="true" />

            <button className={fr.cx("fr-btn", "ri-24-hours-fill", "fr-btn--icon-left")}>
                Download
            </button>

            <h1>Color Scheme: {isDark ? "dark" : "light"}</h1>
            <button onClick={() => setIsDark(true)}>Set color scheme to dark</button>
            <button onClick={() => setIsDark(false)}>Set color scheme to light</button>
            <button onClick={() => setIsDark("system")}>Set color scheme to system</button>

            <SwitchColorTheme />

        </>
    );
}