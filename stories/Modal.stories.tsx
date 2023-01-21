import * as React from "react";
import { Modal, ModalProps } from "../dist/Modal";
import { sectionName } from "./sectionName";
import { getStoryFactory } from "./getStory";
import { Button } from "../dist/Button";
import { assert } from "console";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "ModalSimple",
    component: Modal,
    argTypes: {
        "className": {
            "options": [0, 1],
            "mapping": ["fr-modal--opened", ""],
            "control": {
                "type": "radio",
                "labels": ["open", "close"]
            }
        },
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
    }
};

const Template = args => <Modal {...args} />;

export const ModalOpen = Template.bind({});
ModalOpen.args = {
    "id": "modal-id",
    "className": "fr-modal--opened",
    "children":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.",
    "title": "Titre de la modale",
    "iconId": "fr-icon-ancient-gate-fill"
};

export const ModalClose = Template.bind({});
ModalClose.args = {
    "id": "modal-id",
    "children":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas. Ut porttitor urna ac augue cursus tincidunt sit amet sed orci.",
    "title": "Titre de la modale",
    "iconId": "fr-icon-ancient-gate-fill"
};
