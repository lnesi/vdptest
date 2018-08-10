import React, { Component } from "react";

class HeroPhone extends Component {
    constructor(props) {
        super(props);
        this.state = { currentColor: 0 };
    }
    render() {
        console.log("phone", this.props.phone);
        if (this.props.phone) {
            return (
                <div className="phone_display container">
                    <div className="row">
                        <div className="col">
                         <img src={this.props.phone.colours[this.state.currentColor].merchandisingMedia[0].value}/>
                       
                        </div>
                        <div className="col">
                            <h1>{this.props.phone.groupName}</h1>
                            <div>
                            Colour:{" "}
                            {
                                this.props.phone.colours[
                                    this.state.currentColor
                                ].name
                            }
                            <ul>
                                {this.props.phone.colours.map((c, i) => {
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
                            <div>
                                Capacity:
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default HeroPhone;