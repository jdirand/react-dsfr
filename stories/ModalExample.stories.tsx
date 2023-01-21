import * as React from "react";
import { Modal, ModalProps } from "../dist/Modal";
import { sectionName } from "./sectionName";
import { getStoryFactory } from "./getStory";
import { Button } from "../dist/Button";
import { symToStr } from "tsafe/symToStr";

const { meta, getStory } = getStoryFactory({
    sectionName,
    "wrappedComponent": { [symToStr({ Modal })]: Story },
    "description": `
A button that opens a modale
- [See DSFR documentation](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/modale)
- [See source code](https://github.com/codegouvfr/react-dsfr/blob/main/src/Modal.tsx)`,
    "argTypes": {
        "title": {
            "description": `Required when the \`<Alert isSmall={false} />\` 
                (which is the default if \`isSmall\` isn't specified).`,
            "control": { "type": "string" }
        },
        "children": {
            "description": "",
            "control": { "type": "string" }
        },
        "iconId": {
            "options": (() => {
                const options = ["fr-icon-ancient-gate-fill", "ri-ancient-gate-fill"] as const;
                return options;
            })(),
            "control": { "type": "radio" }
        }
    },
    "disabledProps": ["containerWidth"]
});

export default meta;

function Story() {
    return (
        <>
            <Button
                onClick={() => console.log("onClick")}
                nativeButtonProps={{ "aria-controls": "fr-modal-1" }}
                data-fr-opened="false"
            >
                {" "}
                Open Modal
            </Button>
            <Modal
                id="fr-modal-1"
                title="Titre de la modale"
                iconId="fr-icon-arrow-right-line"
                children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci."
            />
        </>
    );
}

export const Default = getStory({
    "children":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.",
    "title": "Titre de la modale",
    "iconId": "fr-icon-ancient-gate-fill"
});

//This must be perfected, code seems to accept only string code and Story.toString() does not work
Default.parameters = {
    docs: {
        source: {
            code: `
<>
    <Button onClick={() => console.log("onClick")} nativeButtonProps={{ "aria-controls": "fr-modal-1" }} data-fr-opened="false"> Open Modal</Button>
    <Modal id="fr-modal-1" title="Titre de la modale" children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci." />
</>        
`
        }
    }
};
