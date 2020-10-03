import React from 'react';
import Home from './components/Home'
import NoMatch from './components/NoMatch'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
