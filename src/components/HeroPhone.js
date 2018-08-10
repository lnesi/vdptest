import React, { Component } from "react";
import _ from "lodash";

import ColorSelector from './ColorSelector';
import CapacitySelector from './CapacitySelector';



class HeroPhone extends Component {
    static getDerivedStateFromProps(props, state) {
        return { details: getDetails(props.phone) };
    }

    constructor(props) {
        super(props);
        this.state = {
            currentColor: 1,
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

    render() {
        console.log("phone", this.props.phone, this.state.details);
        if (this.props.phone) {
            return (
                <div className="phone_display container">
                    <div className="row">
                        <div className="col-sm-6">
                            <img
                                src={
                                    this.state.details.colours[
                                        this.state.currentColor
                                    ].merchandisingMedia[0].value
                                }
                                width="100%r"
                            />
                        </div>
                        <div className="col-sm-6 text-left">
                            <h1>{this.getPhoneByDetails().displayName}</h1>
                            <p>{this.getPhoneByDetails().displayDescription}</p>
                            <div>
                                <ColorSelector colours={this.state.details.colours} currentColor={this.state.currentColor}/>
                            </div>
                            <div>
                                <CapacitySelector capacities={this.state.details.capacities} currentCapacity={this.state.currentCapacity}/>
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