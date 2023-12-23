/* eslint-disable react/prop-types */
import React, { createContext, useContext, useReducer, useState } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
	transactions: [],
	handleTransactionAdd: (item) => { },
}

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {

	const [state, dispatch] = useReducer(AppReducer, initialState)

	const handleTransactionAdd = (transaction) => {
		dispatch({ type: "ADD", payload: transaction });
	};


	console.log(state)
	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				handleTransactionAdd,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
