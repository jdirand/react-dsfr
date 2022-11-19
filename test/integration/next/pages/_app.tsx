import type { AppProps } from "next/app";
import { DsfrLangProvider } from "@codegouvfr/react-dsfr";
import { createNextDsfrIntegrationApi } from "@codegouvfr/react-dsfr/next";
import { Header } from "@codegouvfr/react-dsfr/Header";

const {
    withDsfr,
    dsfrDocumentApi
} = createNextDsfrIntegrationApi({
    "defaultColorScheme": "system",
    "preloadFonts": [
        //"Marianne-Light",
        //"Marianne-Light_Italic",
        "Marianne-Regular",
        //"Marianne-Regular_Italic",
        "Marianne-Medium",
        //"Marianne-Medium_Italic",
        "Marianne-Bold"
        //"Marianne-Bold_Italic",
        //"Spectral-Regular",
        //"Spectral-ExtraBold"
    ],
    "doPersistDarkModePreferenceWithCookie": true
});

export { dsfrDocumentApi };

function App({ Component, pageProps }: AppProps) {
    return (
        <DsfrLangProvider lang="fr">
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
            <Component {...pageProps} />
        </DsfrLangProvider>
    );
}

export default withDsfr(App);