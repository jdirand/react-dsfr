import * as React from "react";
import { Modal } from "../dist/Modal";
import { Button } from "../dist/Button";
import { ModalClose } from "./Modal.stories";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "ModalButton",
    component: Modal
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
