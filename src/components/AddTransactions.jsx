/* eslint-disable react/prop-types */
import React, { useState } from "react";

const AddTransactions = (props) => {
	const [detail, setDetail] = useState("");
	const [amount, setAmount] = useState('');

	const addTransaction = (e) => {
		e.preventDefault();
		const transationObj = {
			id: Math.random() * 10,
			text: detail,
			amount: amount,
		}

		props.handleTransactionAdd(transationObj);
		setDetail('')
		setAmount('')
	};

	return (
		<form onSubmit={addTransaction}>
			<div>
				<label htmlFor="desc">Description</label>
				<input
					type="text"
					id="desc"
					placeholder="enter desc"
					value={detail}
					onChange={(e) => setDetail(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="amount">Amount</label>
				<input
					type="number"
					id="amount"
					placeholder="enter amount"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
			</div>
			<button type="submit">Add Transaction</button>
		</form>
	);
};

export default AddTransactions;
