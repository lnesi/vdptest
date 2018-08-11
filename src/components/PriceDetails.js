import React from "react";

export default function PriceDetails(props) {
	return (
		<div className="price_details">
			<div className="row align-items-center">
				<div className="col">
					from{" "}
					<span>
						{" "}
						&pound;{props.priceInfo.hardwarePrice.oneOffPrice.gross}
					</span>{" "}
					upfront cost
				</div>
				<div className="col">
					When you pay{" "}
					<span>
						&pound;{props.priceInfo.bundlePrice.monthlyPrice.gross}
					</span>{" "}
					a month
				</div>
			</div>
		</div>
	);
}