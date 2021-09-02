import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/pages/home/Home';
import ImagesGallery from './components/pages/imagesgallery/ImagesGallery';
import Introduce from './components/pages/introduce/Introduce';
import Login from './components/pages/login/Login';
import People from './components/pages/people/People';
import Profile from './components/pages/profile/Profile';

class RouterLink extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact><Home displayName={this.props.displayName}/></Route>
                <Route path="/profile/:id" exact><Profile displayName={this.props.displayName}/></Route>
                <Route path="/imagesgallery/" component={ImagesGallery} exact />
                <Route path="/introduce" component={Introduce} exact />
                <Route path="/people" component={People} exact />
                <Route path="/login" render={()=>{
                    return this.props.isSignedIn === true ? <Redirect to="/" /> : <Login/>
                }} exact />
            </Switch>
        );
    }
}

export default RouterLink;
