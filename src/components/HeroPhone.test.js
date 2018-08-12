import React from "react";
import Enzyme from "enzyme";
import sinon from "sinon";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import { getPhoneDetails, getPhoneByDetails } from "../helpers";

Enzyme.configure({ adapter: new Adapter() });

import HeroPhone from "./HeroPhone";
import data from "../phones.json";
const phoneDetails = getPhoneDetails(data[0]);

it("it renders", () => {
	const wrapper = Enzyme.mount(<HeroPhone phone={data[0]} />);
	expect(wrapper.find(".hero_phone")).to.exist;
});

it("allows us to read and set props", () => {
	const wrapper = Enzyme.mount(<HeroPhone phone={data[0]} bar="baz" />);
	expect(wrapper.props().bar).to.equal("baz");
	wrapper.setProps({ bar: "foo" });
	expect(wrapper.props().bar).to.equal("foo");
});

it("renders the title", () => {
	const wrapper = Enzyme.mount(<HeroPhone phone={data[0]} />);
	expect(wrapper.find("h1")).to.exist;
	expect(wrapper.find("h1").html()).to.contains(data[0].groupName);
});

it("renders the image", () => {
	const wrapper = Enzyme.mount(<HeroPhone phone={data[0]} />);
	expect(wrapper.find("img")).to.exist;
	expect(
		wrapper
			.find("img")
			.getDOMNode()
			.getAttribute("alt")
	).to.equal(data[0].groupName);
});

it("renders the rate component", () => {
	const wrapper = Enzyme.mount(<HeroPhone phone={data[0]} />);
	expect(wrapper.find(".widget-ratings")).to.exist;
});

it("renders color selector", () => {
	const wrapper = Enzyme.mount(<HeroPhone phone={data[0]} />);
	expect(wrapper.find(".color_selector")).to.exist;
});

it("renders capacity selector", () => {
	const wrapper = Enzyme.mount(<HeroPhone phone={data[0]} />);
	expect(wrapper.find(".capacity_selector")).to.exist;
});

it("renders price details", () => {
	const wrapper = Enzyme.mount(<HeroPhone phone={data[0]} />);
	expect(wrapper.find(".price_details")).to.exist;
});

it("renders the correct initial color image ", () => {
	const wrapper = Enzyme.mount(<HeroPhone phone={data[0]} />);
	expect(wrapper.find("img")).to.exist;
	expect(
		wrapper
			.find("img")
			.getDOMNode()
			.getAttribute("src")
	).to.equal(phoneDetails.colours[0].merchandisingMedia[0].value);
});

