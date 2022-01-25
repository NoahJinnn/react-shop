import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import { BCContext, defaultBC } from './context/broadcast-channel';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import SignInSignUpPage from './pages/signin-signup/SignInSignUpPage';

function App() {
    return (
        <Router>
            <BCContext.Provider value={defaultBC}>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/shop">
                            <ShopPage />
                        </Route>
                        <Route path="/signin">
                            <SignInSignUpPage />
                        </Route>
                    </Switch>
                </div>
            </BCContext.Provider>
        </Router>
    );
}

export default App;
