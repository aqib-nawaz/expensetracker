import React from 'react';
import Header from './components/header/Header';
import Balance from './components/balance/Balance';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import AddTransactions from './components/addTransactions/AddTransactions';

function App() {

  const dummyTransactions = [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ];
  return (
    <>
      <Header />
      <Balance transactions={dummyTransactions} />
      <TransactionHistory transactions={dummyTransactions} />
      <AddTransactions />
    </>
  )
}

export default App
