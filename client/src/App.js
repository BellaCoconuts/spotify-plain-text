import React, { useEffect, useRef } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes/rotues'
import './App.css'

const url = 'https://api.spotify.com/v1'

const getData = async (endpoint) => await (await fetch(url + endpoint)).json()

function App() {
  const followedArtists = useRef([])

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
