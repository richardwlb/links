import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/sign-in" >Sign in</Link></li>
                        <li><Link to="/sign-up" >Sign up</Link></li>
                        <li><Link to="/manage/links/create" >Create Link</Link></li>
                        <li><Link to="/manage/links/edit" >Edit Link</Link></li>
                        <li><Link to="/manage/links" >Links</Link></li>
                        <li><Link to="/" >Home</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/sign-in"><h1>SigIn</h1></Route>
                    <Route path="/sign-up"><h1>SigUp</h1></Route>
                    <Route path="//manage/links/create"><h1>Create Link</h1></Route>
                    <Route path="/manage/links/edit"><h1>Edit Link</h1></Route>
                    <Route path="/manage/links"><h1>Links</h1></Route>
                    <Route exact path="/"><h1>Home</h1></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;