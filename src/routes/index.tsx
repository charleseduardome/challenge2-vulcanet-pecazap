import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';
import Chat from '../pages/Chat';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/chat" exact component={Chat} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
