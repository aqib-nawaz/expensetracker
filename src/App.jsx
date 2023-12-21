import React, { useState } from 'react';
import './App.css'

import Header from './components/Header';
import Balance from './components/Balance';
import TransactionHistory from './components/TransactionHistory';
import AddTransactions from './components/AddTransactions';
import IncomeExpense from './components/IncomeExpense';

function App() {


  const dummyTransactions = [
    { id: 1, text: 'Flower', amount: -20 },
  ];


  const [allTransaction, setAllTransactions] = useState(dummyTransactions)

  const handleTransactionAdd = (data) => {
    setAllTransactions((prev) => {
      return [data, ...prev]
    })
  }



  return (
    <>
      <Header />
      <main className='main-container'>
        <Balance transactions={allTransaction} />
        <IncomeExpense transactions={allTransaction} />
        <TransactionHistory transactions={allTransaction} />
        <AddTransactions handleTransactionAdd={handleTransactionAdd} />
      </main>
    </>
  )
}

export default App
