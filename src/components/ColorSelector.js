import React, { Component } from "react";

class ColorSelector extends Component {
    render() {
        return (
            <div className="color_selector">
                Colour: {this.props.colours[this.props.currentColor].name}
                <ul>
                    {this.props.colours.map((c, i) => {
                        return (
                            <li
                                className="color_selector__item"
                                key={"color_selector_item_" + i}
                            >
                                {c.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default ColorSelector;