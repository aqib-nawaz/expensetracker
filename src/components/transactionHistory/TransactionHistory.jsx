/* eslint-disable react/prop-types */
import React from "react";

function TransactionHistory({ transactions }) {

	const moneyFormat = (amount) => {
		if (amount < 0) {
			return `-$${+amount.toString().split("-")[1]}`
		} return `+$${amount}`
	}
	return (
		<div>
			<h2>Transaction History</h2>
			<ul>
				{transactions.map((item) => (
					<li key={item.id} className={item.amount < 0 ? "income" : "expense"}>
						{item.text} <span>{moneyFormat(item.amount)}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TransactionHistory;
