import React from 'react'
import HomePage from './components/HomePage'
import Header from './components/Header'
import { Provider } from 'react-redux'
import { appStore } from './utils/aapStore'

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <HomePage />
      </div>
    </Provider>
  )
}

export default App