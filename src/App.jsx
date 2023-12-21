import React, { useState, useContext } from 'react';
import './App.css'

import Header from './components/Header';
import Balance from './components/Balance';
import TransactionHistory from './components/TransactionHistory';
import AddTransactions from './components/AddTransactions';
import IncomeExpense from './components/IncomeExpense';
import { ContextProvider } from './context/GlobalState';


function App() {


  return (
    <ContextProvider>
      <Header />
      <main className='main-container'>
        <Balance />
        <IncomeExpense />
        <TransactionHistory />
        <AddTransactions />
      </main>
    </ContextProvider>
  )
}

export default App
