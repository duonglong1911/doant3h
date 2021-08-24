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
                {
                    this.props.isLogin ? 
                    <>
                        <Route path="/" exact><Home/></Route>
                        <Route path="/profile/" component={Profile} exact/>
                        {/* <Route path="/" exact render={()=>{
                            return this.props.isLogin ? <Home/> : <Redirect to="/login"/>
                        }}/> */}
                        <Route path="/imagesgallery/" component={ImagesGallery} exact />
                    </>
                    : 
                    <>
                        <Route path="/login" exact><Login onClickRedirect={this.props.onClickRedirect}/></Route>
                        <Redirect to="/login" />
                    </>
                }
                
            </Switch>
        );
    }
}

export default RouterLink;