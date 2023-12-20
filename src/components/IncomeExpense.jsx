import React from 'react'

const IncomeExpense = () => {
	const totalIncome = 200;
	const totalExpense = -200;
	return (
		<div className='income-expense__contianer'>
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
	)
}

export default IncomeExpense