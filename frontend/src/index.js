import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // REDUX

import store from './store'; // REDUX

import App from './app';

// CSS Framework
import './styles/main.scss';

ReactDOM.render( 
    <Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById('root')
);