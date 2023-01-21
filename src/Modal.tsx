import React, { memo, forwardRef } from "react";
import { fr } from "./fr";
import { cx } from "./tools/cx";
import type { ReactNode } from "react";
import { Equals, assert } from "tsafe";
import { createComponentI18nApi } from "./i18n";
import type { FrIconClassName, RiIconClassName } from "./fr/generatedFromCss/classNames";
import { symToStr } from "tsafe/symToStr";

export type ModalProps = ModalProps.Common &
    (ModalProps.WithTitleIcon | ModalProps.WithoutTitleIcon) &
    (ModalProps.WithAction | ModalProps.WithoutAction);
export namespace ModalProps {
    export type Common = {
        className?: string;
        id: string;
        title: ReactNode;
        children: ReactNode;
    };

    export type WithTitleIcon = {
        iconId: FrIconClassName | RiIconClassName;
    };

    export type WithoutTitleIcon = {
        iconId?: never;
    };

    export type WithAction = {};

    export type WithoutAction = {};
}

export const Modal = memo(
    forwardRef<HTMLDialogElement, ModalProps>((props, ref) => {
        const { className, id, children, title, iconId, ...rest } = props;

        assert<Equals<keyof typeof rest, never>>();

        const { t } = useTranslation();

        return (
            <dialog
                aria-labelledby="fr-modal-title-modal-1"
                role="dialog"
                id={id}
                className={cx(fr.cx("fr-modal"), className)}
                ref={ref}
            >
                <div className={fr.cx("fr-container", "fr-container--fluid", "fr-container-md")}>
                    <div className={fr.cx("fr-grid-row", "fr-grid-row--center")}>
                        <div className={fr.cx("fr-col-12", "fr-col-md-8", "fr-col-lg-6")}>
                            <div className={fr.cx("fr-modal__body")}>
                                <div className={fr.cx("fr-modal__header")}>
                                    <button
                                        className={fr.cx("fr-link--close", "fr-link")}
                                        title={t("close")}
                                        aria-controls={id}
                                    >
                                        {t("close")}
                                    </button>
                                </div>
                                <div className={fr.cx("fr-modal__content")}>
                                    <h1
                                        id="fr-modal-title-modal-1"
                                        className={fr.cx("fr-modal__title")}
                                    >
                                        {iconId !== undefined && (
                                            <span className={fr.cx(iconId, "fr-fi--lg")}></span>
                                        )}
                                        {title}
                                    </h1>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        );
    })
);

Modal.displayName = symToStr({ Modal });

const { useTranslation, addModalTranslations } = createComponentI18nApi({
    "componentName": symToStr({ Modal }),
    "frMessages": {
        "close": "Fermer"
    }
});

addModalTranslations({
    "lang": "en",
    "messages": {
        "close": "Close"
    }
});

addModalTranslations({
    "lang": "es",
    "messages": {
        "close": "Cerrar"
    }
});

export { addModalTranslations };
