import React, { Component } from "react";
import _ from "lodash";
import Ratings from "react-ratings-declarative";
import ColorSelectorItem from './ColorSelectorItem';
import InlineButtonSelector from "./InlineButtonSelector";
import PriceDetails from './PriceDetails'
import "../css/hero_phone.css";



class HeroPhone extends Component {
    static getDerivedStateFromProps(props, state) {
        return { details: getDetails(props.phone) };
    }

    constructor(props) {
        super(props);
        this.state = {
            currentColor: 0,
            currentCapacity: 0,
            details: {
                colours: [],
                capacities: []
            }
        };
    }

    getPhoneByDetails() {
        const phone = _.find(this.props.phone.deviceSummary, p => {
            return (
                p.colourName ===
                    this.state.details.colours[this.state.currentColor].name &&
                p.memory ===
                    this.state.details.capacities[this.state.currentCapacity]
                        .label
            );
        });
        return phone;
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
                            <p>{this.getPhoneByDetails().displayDescription}</p>
                            
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
                                    <PriceDetails priceInfo={this.getPhoneByDetails().priceInfo} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

function getDetails(phone) {
    const details = {
        colours: [],
        capacities: []
    };

    const colorGroups = _.keyBy(phone.deviceSummary, item => {
        return item.colourName;
    });

    Object.keys(colorGroups).forEach(function(k) {
        details.colours.push({
            name: colorGroups[k].colourName,
            hex: colorGroups[k].colourHex,
            merchandisingMedia: colorGroups[k].merchandisingMedia
        });
    });

    const capacityGroups = _.keyBy(phone.deviceSummary, item => {
        return item.memory;
    });

    Object.keys(capacityGroups).forEach(function(k) {
        details.capacities.push({
            label: capacityGroups[k].memory,
            value: capacityGroups[k].memory.replace("GB", "")
        });
    });

    return details;
}

export default HeroPhone;