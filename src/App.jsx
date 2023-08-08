import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IcomeExpenses from './components/IcomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'


function App() {
  

  return (
    <GlobalProvider>
      <Header/>

      <div className='container'>
      <Balance/>
      <IcomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  )
}

export default App
