import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {

	const { transactions } = useContext(GlobalContext)

	return (
		<div className="balance-container">
			<h2>Your Balance</h2>
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
