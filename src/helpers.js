import _ from "lodash";
export function getPhoneDetails(phone) {
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

export function getPhoneByDetails(phoneRaw, colorName, memory) {
	const phone = _.find(phoneRaw.deviceSummary, p => {
		return p.colourName === colorName && p.memory === memory;
	});
	return phone;
}