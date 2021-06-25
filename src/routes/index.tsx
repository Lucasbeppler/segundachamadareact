import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Evento from '../pages/Evento'


const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Evento} />

  </Switch>
)

export default Routes
