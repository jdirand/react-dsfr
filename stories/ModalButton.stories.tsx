import * as React from "react";
import { Modal, ModalProps } from "../dist/Modal";
import { sectionName } from "./sectionName";
import { getStoryFactory } from "./getStory";
import { Button } from "../dist/Button";
import { ModalClose } from "./Modal.stories";
import { id } from "tsafe";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "ModalButton",
    component: Modal,
    argTypes: {
        modalArgs: {
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
    }
};

const Template = args => (
    <>
        <Button
            onClick={() => console.log("onClick")}
            nativeButtonProps={{ "aria-controls": "modal-id" }}
            data-fr-opened="false"
        >
            Open Modal
        </Button>
        <ModalClose {...args} />
    </>
);

export const ModalButton = Template.bind({});
ModalButton.args = {
    ...ModalClose.args
};
