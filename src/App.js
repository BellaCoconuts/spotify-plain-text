import React, { useEffect, useRef } from 'react'
import './App.css'

const url = 'https://api.spotify.com/v1'

const getData = async endpoint => await (await fetch(url + endpoint)).json()

const fetchData = async (current, endpoint) => {
  const results = fetchData(
    getData(current && current.next ? current.next : url + endpoint)
  )
  return [...current.items, ...results]
}

function App() {
  const followedArtists = useRef([])
  useEffect(() => {
    fetchData().then(result => (followedArtists.current = result))
  }, [followedArtists])

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
