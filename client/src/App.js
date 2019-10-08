import React, { useEffect, useRef } from 'react'
import './App.css'

const url = 'https://api.spotify.com/v1'

const getData = async endpoint => await (await fetch(url + endpoint)).json()

function App() {
  const followedArtists = useRef([])

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div className="App">
      <ul>
        {followedArtists.current.map(d => (
          <li key={d.id}>{d}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
