import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {ThemeProvider} from './Themes/ThemeProvider';
import {Total, ListCountry} from './Pages';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Total} />
          <Route exact path="/ListCountry" component={ListCountry} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
