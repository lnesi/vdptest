import React, { Component } from "react";

class CapacitySelector extends Component {
    render() {
        return (
            <div className="capacity_selecgtor">
                <div>
                    Capacity:{" "}
                    {
                        this.props.capacities[
                            this.props.currentCapacity
                        ].label
                    }
                </div>
                <ul>
                    {this.props.capacities.map((c, i) => {
                        return (
                            <li
                                className="capacities_selector__item"
                                key={"capacities_selector_item_" + i}
                            >
                                {c.value}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default CapacitySelector