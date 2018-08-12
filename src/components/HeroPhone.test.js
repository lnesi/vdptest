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

it("renders the correct initial color label ", () => {
	const wrapper = Enzyme.mount(<HeroPhone phone={data[0]} />);
	expect(wrapper.find("img")).to.exist;
	expect(
		wrapper
			.find(".color_selector")
			.find("strong")
			.html()
	).to.contains(phoneDetails.colours[0].name);
});

it("renders the correct initial memory ", () => {
	const wrapper = Enzyme.mount(<HeroPhone phone={data[0]} />);
	expect(wrapper.find("img")).to.exist;
	expect(
		wrapper
			.find(".capacity_selector")
			.find("strong")
			.html()
	).to.contains(phoneDetails.capacities[0].label);
});

it("does it change the image on mouseover", () => {
	const wrapper = Enzyme.mount(<HeroPhone phone={data[0]} />);

	wrapper
		.find(".color_selector")
		.find(".color_selector__item__button")
		.at(1)
		.simulate("mouseover");
	expect(
		wrapper
			.find("img")
			.getDOMNode()
			.getAttribute("src")
	).to.equal(phoneDetails.colours[1].merchandisingMedia[0].value);
});

it("does it change the color label on mouseover", () => {
	const wrapper = Enzyme.mount(<HeroPhone phone={data[0]} />);

	wrapper
		.find(".color_selector")
		.hostNodes()
		.find(".color_selector__item__button")
		.at(1)
		.simulate("mouseover");
	expect(
		wrapper
			.find(".color_selector")
			.find("strong")
			.html()
	).to.contains(phoneDetails.colours[1].name);
});

it("does it change the capacity label on mouseover", () => {
	const wrapper = Enzyme.mount(<HeroPhone phone={data[0]} />);

	wrapper
		.find(".capacity_selector")
		.hostNodes()
		.find(".inline_button_selector__button")
		.at(1)
		.simulate("mouseover");
	expect(
		wrapper
			.find(".capacity_selector")
			.find("strong")
			.html()
	).to.contains(phoneDetails.capacities[1].label);
});