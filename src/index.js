import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { Route, Switch } from 'react-router-dom';

import bg from './Assets/bg.png';
import Footer from './FilePages/Footer.js';
ReactDOM.render(
    
    
    <div className="wholeBg">
         <img className="bgStyle" src={bg} />
    <BrowserRouter>
    <App />
<Footer />
    </BrowserRouter>
    </div>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
