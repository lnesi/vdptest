import React, { Component } from 'react';

class PhoneDisplay extends Component{
    render(){
        return(<div className="phone_display container">
                <div className="row">
                    <div className="col">
                        phone
                    </div>
                    <div className="col">
                        <h1>Title</h1>
                    </div>
                </div>
            </div>)
    }
}

export default PhoneDisplay;