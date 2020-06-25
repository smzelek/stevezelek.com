import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Test from './components/Test';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/test' component={Test} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
};

export default App;
