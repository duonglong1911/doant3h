import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Profile from './components/pages/profile/Profile';

class RouterLink extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/profile/" component={Profile} exact/>
            </Switch>
        );
    }
}

export default RouterLink;