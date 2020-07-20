import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';
import Chat from '../pages/Chat';
import Inbox from '../pages/Inbox';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/chat" component={Chat} />
      <Route path="/inbox" component={Inbox} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
