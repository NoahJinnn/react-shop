import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/HomePage";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/header/Header";
import SignInSignUpPage from "./pages/signin-signup/SignInSignUpPage";

function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <Switch>
                  <Route exact path="/">
                      <HomePage/>
                  </Route>
                  <Route path="/shop">
                      <ShopPage/>
                  </Route>
                  <Route path="/signin">
                      <SignInSignUpPage/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
