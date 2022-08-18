import React, { useState, useEffect } from 'react'

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // System outside of React, so i use useEffect
  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', watchWidth)

    // To counter memory leak when the state of show is on false
    return function () {
      window.removeEventListener('resize', watchWidth)
    }
  }, [])

  return <h1>Window width: {windowWidth}</h1>
}
