import React from 'react'
import { useRouteMatch, useLocation } from 'react-router-dom'

export const Home = () => {
  const match = useRouteMatch('/callback')
  const params = new URLSearchParams(useLocation().search)
  console.log(match)

  // params.forEach((value, key) => console.log(key, value))
  // console.log()

  return match === null ? <div>Home</div> : <div>callback</div>
}
