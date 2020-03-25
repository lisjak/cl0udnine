import React from 'react'
import { Navbar } from './components'
import Routes from './routes'

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Routes />
      <div id="footer">Redesign and reengineering by Lisa N. Jak. Originally built in conjuction with LISA, LERENA, MICHAELA, AND RASHMI FROM GH-1902. </div>
    </div>
  )
}

export default App
