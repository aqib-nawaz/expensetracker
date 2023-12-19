import React from 'react'

const AddTransactions = () => {
	return (
		<div>
			<form action="#">
				<div>
					<label htmlFor="desc">Description</label>
					<input type="text" id='desc' placeholder='enter desc' />
				</div>
				<div>
					<label htmlFor="amount">Amount</label>
					<input type="number" id='amount' placeholder='enter amount' />
				</div>
				<button type='submit'>Add</button>
			</form>
		</div>
	)
}

export default AddTransactions