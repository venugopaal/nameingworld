import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';
import Home from './components/home';

function App() {
  return (
    <div className="App">
     <Router>
     <Switch>
         <Route path="/">
           < Home />
         </Route>

       </Switch>
     </Router>
    </div>
  );
}

export default App;
