import React from "react";
import Enzyme from "enzyme";
import sinon from "sinon";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import HeroPhone from "./HeroPhone";
import data from "../phones.json";


it("it renders", () => {
	const wrapper = Enzyme.mount(
		<HeroPhone phone={data[0]} />
	);
	expect(wrapper.find(".hero_phone")).to.exist;
});

// it("allows us to read and set props", () => {
// 	const wrapper = Enzyme.shallow(
// 		<App store={mockStore({ PhoneList: { list: data } })} bar="baz" />
// 	);
// 	expect(wrapper.props().bar).to.equal("baz");
// 	wrapper.setProps({ bar: "foo" });
// 	expect(wrapper.props().bar).to.equal("foo");
// });

// it("calls componentDidMount", () => {
// 	sinon.spy(App.prototype, "componentDidMount");
// 	const wrapper = Enzyme.mount(
// 		<App store={mockStore({ PhoneList: { list: data } })} />
// 	);
// 	expect(App.prototype.componentDidMount).to.have.property("callCount", 1);
// 	App.prototype.componentDidMount.restore();
// });

// it("it renders hero_phone", () => {
// 	const wrapper = Enzyme.mount(
// 		<App store={mockStore({ PhoneList: { list: data } })} />
// 	);
// 	expect(wrapper.find(".hero_phone")).to.exist;

// });