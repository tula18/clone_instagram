import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SessionFormContainer from './session/session_form_container';


const App = () => (
  <div>
    <header>
      <Link to="/">
        <h1>CloneInstagram</h1>
      </Link>
    </header>
    <Switch>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
