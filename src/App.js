import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import Home from './pages/home';
import Landing from './pages/landing';
import Artists from './pages/artists';


function App() {
  return (
    <Router>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/artists' component={Artists} />
          <Route path='/' component={Landing} />

          <Redirect to='/'/>
        </Switch>
      </Router>
  );
}

export default App;
