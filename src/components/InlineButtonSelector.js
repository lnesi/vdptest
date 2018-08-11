import React, { Component } from "react";
import '../css/inline_button_selector.css'
import PropTypes from 'prop-types';

function SelectorItem(props) {
    const selectedClass = props.selected ? "selected" : "";
    return (
        <div className={"inline_button_selector__button__border " + selectedClass}>
            <div
                onMouseOver={() => {
                    props.onChange(props.index);
                }}
                className="inline_button_selector__button"
            >
                <span>{props.label}</span>
            </div>
        </div>
    );
}

class InlineButtonSelector extends Component {
    render() {
        const ItemClass = this.props.itemClass;
        return (
            <div className={this.props.className+" inline_button_selector"}>
                {this.props.label}: <strong>{this.props.value}</strong>
                <ul>
                    {this.props.itemList.map((c, i) => {
                        return (
                            <li
                                className="inline_button_selector__item"
                                key={this.props.className + "_item_" + i}
                            >
                                <ItemClass
                                    index={i}
                                    selected={this.props.currentIndex === i}
                                    label={c[this.props.labelProp]}
                                    value={c[this.props.valueProp]}
                                    onChange={this.props.onChange}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
InlineButtonSelector.propTypes = {
  itemClass: PropTypes.element
};
InlineButtonSelector.defaultProps={
    labelProp:'label',
    valueProp:'value',
    currentIndex:0,
    className:'',
    itemClass:SelectorItem

}
export default InlineButtonSelector;
