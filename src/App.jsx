import React from 'react'
import HomePage from './components/HomePage'
import Header from './components/Header'
import { Provider } from 'react-redux'
import { appStore } from './utils/aapStore'
import BrowseBook from './components/BrowseBook'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet/>
      </div>
    </Provider>
  )
}

export default App