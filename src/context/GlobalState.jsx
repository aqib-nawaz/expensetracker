/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";

const initialState = {
	transactions: [{ id: 1, text: 'Flower', amount: -20 }],
	handleTransactionAdd: function (obj) {
		console.log("obj", obj)
		return this.transactions = [obj, ...this.transactions]
	}
};

export const GlobalContext = createContext(initialState);
export const ContextProvider = ({ children }) => {

	const context = useContext(GlobalContext)

	return (
		<GlobalContext.Provider value={context}>
			{children}
		</GlobalContext.Provider>
	)
};
