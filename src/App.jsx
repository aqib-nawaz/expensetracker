import React, { useState, useContext } from 'react';
import './App.css'

import Header from './components/Header';
import Balance from './components/Balance';
import TransactionHistory from './components/TransactionHistory';
import AddTransactions from './components/AddTransactions';
import IncomeExpense from './components/IncomeExpense';


function App() {

  return (
    <React.Fragment>
      <Header />
      <main className='main-container'>
        <Balance />
        <IncomeExpense />
        <TransactionHistory />
        <AddTransactions />
      </main>
    </React.Fragment>
  )
}

export default App
