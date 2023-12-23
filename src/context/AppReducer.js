export const AppReducer = (state, action) => {
	if (action.type === "ADD") {
		return { ...state, transactions: [action.payload, ...state.transactions] };
	} else {
		return state;
	}
};
