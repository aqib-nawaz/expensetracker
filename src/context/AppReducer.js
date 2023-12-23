export const AppReducer = (state, action) => {
	if (action.type === "ADD") {
		return { ...state, transactions: [action.payload, ...state.transactions] };
	} else if (action.type === "DEL") {
		return {
			...state,
			transactions: state.transactions.filter(
				(i) => i.id !== action.payload
			),
		};
	} else {
		return state;
	}
};
