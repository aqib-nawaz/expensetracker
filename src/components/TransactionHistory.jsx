import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function TransactionHistory() {
	const { transactions, handleTransactionDel } = useContext(GlobalContext);

	const moneyFormat = (amount) => {
		if (amount < 0) {
			return `-$${+amount.toString().split("-")[1]}`;
		}
		return `+$${amount}`;
	};

	return (
		<div className="transaction-history__container">
			<h2>Transaction History</h2>
			<ul>
				{transactions.map((item) => (
					<li
						key={item.id}
						className={item.amount < 0 ? "expense-item" : "income-item"}
					>
						{item.text} <span>{moneyFormat(item.amount)}</span>
						<div className="del" onClick={() => handleTransactionDel(item.id)}>
							x
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TransactionHistory;
