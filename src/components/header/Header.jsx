import React from 'react'
import styles from './Header.module.css'
const Header = () => {
	return (
		<div className={styles.header}>
			<h1>Expense Tracker by : <span className={styles.author}>Aqib Nawaz</span></h1>
		</div>
	)
}

export default Header