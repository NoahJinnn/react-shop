import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/HomePage";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path="/">
                      <HomePage/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
