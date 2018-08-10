import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions/PhoneList";
import "./App.css";
import HeroPhone from "./components/HeroPhone";

class App extends Component {
  componentDidMount() {
    this.props.fetchList();
  }
  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        {this.props.list.map((phone, index) => {
          return <HeroPhone phone={phone} key={"hero_phone_" + index} />;
        })}
      </div>
    );
  }
}

function mapStateToProps({ PhoneList }) {
  return PhoneList;
}
export default connect(mapStateToProps, actions)(App);