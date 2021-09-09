import React, { Component } from 'react'
import Sidebar from './../../layout/sidebar/SideBar'
import Feed from './../../layout/feed/Feed'
import Rightbar from './../../layout/rightbar/Rightbar'
import './home.css'


export default class Home extends Component {
    _isMounted = false;
   componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
    }  
    render() {
        return (
            <div>
                <div className="homeContainer">
                    <Sidebar displayName={this.props.displayName} />
                    <Feed 
                        displayName={this.props.displayName}
                        postsList={this.props.postsList} 
                    />
                    <Rightbar usersList={this.props.usersList} />
                </div>
                {/* <SelectPost /> */}
            </div>
        )
    }
}
