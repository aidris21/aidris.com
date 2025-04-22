import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar';
import {Home} from './components/Home'

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <Home />
      </div>
    </div>
  )
}

export default App
