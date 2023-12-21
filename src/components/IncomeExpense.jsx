import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {

	const { transactions } = useContext(GlobalContext)
	const totalBalance = transactions.map((item) => item.amount);
	const totalIncome = totalBalance.reduce(
		(acc, item) => (item > 0 ? (acc += +item) : acc),
		0
	);
	const totalExpense = totalBalance
		.reduce((acc, item) => (item < 0 ? (acc += +item) : acc), 0)
		.toString().split("-")[1];
	return (
		<div className="income-expense__contianer">
			<div className="income">
				<h2>Income</h2>
				<span>${totalIncome}</span>
			</div>
			<div className="seperator"></div>
			<div className="expense">
				<h2>Expense</h2>
				<span>${totalExpense}</span>
			</div>
		</div>
	);
};

export default IncomeExpense;
