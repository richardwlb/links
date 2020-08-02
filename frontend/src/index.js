import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // REDUX
import TokenRefresher from './components/TokenRefresher';
import store from './store'; // REDUX

import App from './app';

// CSS Framework
import './styles/main.scss';


ReactDOM.render( 
    <Provider store={store} >
        <TokenRefresher />
        <App />
    </Provider>, 
    document.getElementById('root')
);