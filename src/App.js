import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions/PhoneList";
import "./css/App.css";
import HeroPhone from "./components/HeroPhone";

class App extends Component {
  componentDidMount() {
    if (!this.props.list) this.props.fetchList();
  }
  render() {
    if (this.props.list) {
      return (
        <div className="App">
          {this.props.list.map((phone, index) => {
            return <HeroPhone phone={phone} key={"hero_phone_" + index} />;
          })}
        </div>
      );
    } else {
      return (
        <div className="App">
          <div>Loading</div>
        </div>
      );
    }
  }
}

function mapStateToProps({ PhoneList }) {
  return PhoneList;
}
export default connect(mapStateToProps, actions)(App);