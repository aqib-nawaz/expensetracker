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
		<form onSubmit={addTransaction} className="AddTransaction">
			<div className="form-controll">
				<label htmlFor="desc">Description</label>
				<input
					type="text"
					id="desc"
					placeholder="Enter desciption"
					value={detail}
					required
					onChange={(e) => setDetail(e.target.value)}
				/>
			</div>
			<div className="form-controll">
				<label htmlFor="amount">Amount</label>
				<input
					type="number"
					id="amount"
					required
					placeholder="Enter amount"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
			</div>
			<button type="submit">Add Transaction</button>
		</form>
	);
};

export default AddTransactions;
