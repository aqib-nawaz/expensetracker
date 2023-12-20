import React, { useState } from 'react';
import './App.css'

import Header from './components/Header';
import Balance from './components/Balance';
import TransactionHistory from './components/TransactionHistory';
import AddTransactions from './components/AddTransactions';

function App() {
  const dummyTransactions = [
    { id: 1, text: 'Flower', amount: -20 },

  ];
  const [allTranssction, setAllTransactions] = useState(dummyTransactions)

  const handleTransactionAdd = (data) => {
    setAllTransactions((prev) => {
      return [data, ...prev]
    })
  }

  return (
    <>
      <Header />
      <Balance transactions={allTranssction} />
      <TransactionHistory transactions={allTranssction} />
      <AddTransactions handleTransactionAdd={handleTransactionAdd} />
    </>
  )
}

export default App
