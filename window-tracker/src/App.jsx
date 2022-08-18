import React, { useState, useEffect } from 'react'
import './App.css'
import WindowTracker from '../components/WindowTracker'

export default function App() {
 
  // By default, show is true
 const [show, setShow] = useState(true)

  // Toggle true false
  function toggle() {
    setShow((prevShow) => !prevShow)
  }

  return (
    <div className="container">
      <button onClick={toggle}>WindowTracker</button>
      
      {/* Conditional rendering  */}
      {show && <WindowTracker />}
    </div>
  )
}