import React from "react";
export default function(props) {
    const selectedClass = props.selected ? "selected" : "";

    return (
        <div
            className={
                "inline_button_selector__button__border " + selectedClass
            }
        >
            <div
                onMouseOver={() => {
                    props.onChange(props.index);
                }}
                className="inline_button_selector__button color_selector__item__button"
                style={{
                    background:
                        "linear-gradient(" +
                        props.value +
                        ", 75%,rgba(0, 0, 0, 0.25))"
                }}
            >
                <span className="sr-only">{props.label}</span>
            </div>
        </div>
    );
}