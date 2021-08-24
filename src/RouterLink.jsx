import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/pages/home/Home';
import ImagesGallery from './components/pages/imagesgallery/ImagesGallery';
import Login from './components/pages/login/Login';
import Profile from './components/pages/profile/Profile';

class RouterLink extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/profile/" component={Profile} exact/>
                <Route path="/imagesgallery/" component={ImagesGallery} exact />
                <Route path="/imagesgallery" component={ImagesGallery} exact />
                <Route path="/login" component={Login} exact />
            </Switch>
        );
    }
}

export default RouterLink;