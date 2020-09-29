import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';


ReactDOM.render(

  <Router>
    <Switch>
      <Route path="/:siteId">
        <App />
      </Route>
    </Switch>
  </Router>

 ,document.getElementById('app')
 );