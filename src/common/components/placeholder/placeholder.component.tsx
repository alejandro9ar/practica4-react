import React from "react";
import css from "./placeholder-component-styles.modules.css";

interface Props {
    text: string;
}

export const Placeholder: React.FC<Props> = (props) => {
    const { text } = props;

    return (
        <div className={css.root}>
            <div className={css.text}>{text}</div>
        </div>
    );
};
