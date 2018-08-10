import { PHONE_LIST_FETCH } from "../actions/types";
import _ from "lodash";

export default function(state = { list: [] }, action) {
    switch (action.type) {
        case PHONE_LIST_FETCH:
            console.log(action.payload[0]);
            const list = action.payload.map(transformPhone);
            return { ...state, list };
        default:
            return state;
    }
}

function transformPhone(phone) {
    const transformedPhone = {
        colours: [],
        capacities: [],
        groupName: phone.groupName,
        rating: phone.rating
    };
    const colorGroups = _.keyBy(phone.deviceSummary, item => {
        return item.colourName;
    });
    Object.keys(colorGroups).forEach(function(k) {
        transformedPhone.colours.push({
            name: colorGroups[k].colourName,
            hex: colorGroups[k].colourHex,
            merchandisingMedia: colorGroups[k].merchandisingMedia
        });
    });

    const capacityGroups = _.keyBy(phone.deviceSummary, item => {
        return item.memory;
    });

    Object.keys(capacityGroups).forEach(function(k) {
        transformedPhone.capacities.push({
            label: capacityGroups[k].memory,
            value: capacityGroups[k].memory.replace("GB", "")
        });
    });

    return transformedPhone;
}