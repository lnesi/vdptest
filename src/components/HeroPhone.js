import React, { Component } from "react";
import Ratings from "react-ratings-declarative";
import ColorSelectorItem from "./ColorSelectorItem";
import InlineButtonSelector from "./InlineButtonSelector";
import PriceDetails from "./PriceDetails";
import "../css/hero_phone.css";
import PropTypes from "prop-types";
import { getPhoneDetails, getPhoneByDetails } from "../helpers";

class HeroPhone extends Component {
    static getDerivedStateFromProps(props, state) {
        const details = getPhoneDetails(props.phone);
        const currentColorName = details.colours[state.currentColor].name;
        const currentMemory = details.capacities[state.currentCapacity].label;

        return {
            details,
            currentColorName,
            currentMemory
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            currentColor: 0,
            currentColorName: "",
            currentMemory: "",
            currentCapacity: 0,
            details: {
                colours: [],
                capacities: []
            }
        };
    }

    onColorChange(index) {
        this.setState({ currentColor: index });
    }

    onCapacityChange(index) {
        this.setState({ currentCapacity: index });
    }

    render() {
        if (
            this.props.phone &&
            this.state.details.colours &&
            this.state.details.capacities
        ) {
            return (
                <div className="hero_phone container">
                    <div className="row">
                        <div className="col-sm-6">
                            <img
                                src={
                                    this.state.details.colours[
                                        this.state.currentColor
                                    ].merchandisingMedia[0].value
                                }
                                alt={this.props.phone.groupName}
                                width="100%"
                            />
                        </div>
                        <div className="col-sm-6 text-left">
                            <h1>{this.props.phone.groupName}</h1>
                            <div>
                                <Ratings
                                    rating={parseFloat(this.props.phone.rating)}
                                    widgetRatedColors="rgb(254, 203,0)"
                                    widgetDimensions="25px"
                                    widgetSpacings="0px"
                                >
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                </Ratings>
                            </div>
                            <p>
                                {
                                    getPhoneByDetails(
                                        this.props.phone,
                                        this.state.currentColorName,
                                        this.state.currentMemory
                                    ).displayDescription
                                }
                            </p>

                            <div className="row">
                                <div className="col-sm-6">
                                    <InlineButtonSelector
                                        label="Color"
                                        className="color_selector"
                                        value={
                                            this.state.details.colours[
                                                this.state.currentColor
                                            ].name
                                        }
                                        valueProp="hex"
                                        itemList={this.state.details.colours}
                                        itemClass={ColorSelectorItem}
                                        currentIndex={this.state.currentColor}
                                        onChange={this.onColorChange.bind(this)}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <InlineButtonSelector
                                        label="Capacity"
                                        className="capacity_selector"
                                        value={
                                            this.state.details.capacities[
                                                this.state.currentCapacity
                                            ].label
                                        }
                                        labelProp="value"
                                        itemList={this.state.details.capacities}
                                        currentIndex={
                                            this.state.currentCapacity
                                        }
                                        onChange={this.onCapacityChange.bind(
                                            this
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <PriceDetails
                                        priceInfo={
                                            getPhoneByDetails(
                                                this.props.phone,
                                                this.state.currentColorName,
                                                this.state.currentMemory
                                            ).priceInfo
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

HeroPhone.propTypes = {
    phone: PropTypes.object.isRequired
};

export default HeroPhone;