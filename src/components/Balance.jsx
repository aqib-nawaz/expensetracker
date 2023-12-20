/* eslint-disable react/prop-types */
import React from "react";

function Balance({ transactions }) {
	return (
		<div className="balance-container">
			<h2>Total Balance</h2>
			<h1>
				$
				{transactions
					.map((item) => item.amount)
					.reduce((acc, amount) => (acc += +amount), 0)
				}
			</h1>
		</div>
	);
}

export default Balance;
