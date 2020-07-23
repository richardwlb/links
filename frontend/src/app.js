import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'; // REDUX

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ManageLinks from './pages/Manage/Links';
import Create from './pages/Manage/Links/Create';
import Edit from './pages/Manage/Links/Edit';
import Home from './pages/Home';
import { initAccount } from './actions/AccountActions';
import { useEffect } from 'react';

const App = ({ initAccount}) => {

    useEffect( () => {
        initAccount();
    }, [initAccount]);

    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item"><Link to="/sign-in" >Sign in</Link></li>
                        <li className="list-group-item"><Link to="/sign-up" >Sign up</Link></li>
                        <li className="list-group-item"><Link to="/manage/links/create" >Create Link</Link></li>
                        <li className="list-group-item"><Link to="/manage/links/edit" >Edit Link</Link></li>
                        <li className="list-group-item"><Link to="/manage/links" >Links</Link></li>
                        <li className="list-group-item"><Link to="/" >Home</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/sign-in"><SignIn /></Route>
                    <Route path="/sign-up"><SignUp /></Route>
                    <Route path="/manage/links/create"><Create /></Route>
                    <Route path="/manage/links/edit"><Edit /></Route>
                    <Route path="/manage/links"><ManageLinks /></Route>
                    <Route exact path="/"><Home /></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

const mapStateToProps= (state) => {
    return { account: state.account.account };
};

export default connect( mapStateToProps, {initAccount})(App);