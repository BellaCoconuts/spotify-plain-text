import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './home'

export const Routes = () => (
  <Switch>
    <Route path='/'>
      <Home />
    </Route>
  </Switch>
)
