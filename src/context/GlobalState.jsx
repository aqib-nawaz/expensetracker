/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";

const initialState = {
	transactions: [],
	handleTransactionAdd: () => { },
};

export const GlobalContext = createContext(initialState);
export const ContextProvider = ({ children }) => {


	const initialState = [{ id: 21, details: "Flower", amount: 20 }]
	const [allTransactions, setAllTransactions] = useState(initialState);


	const handleTransactionAdd = (obj) => {
		setAllTransactions((prev) => {
			return [obj, ...prev];
		});
	};


	return (
		<GlobalContext.Provider
			value={{
				transactions: allTransactions,
				handleTransactionAdd: handleTransactionAdd,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
