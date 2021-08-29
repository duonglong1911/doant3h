import React, { Component } from 'react'
import Sidebar from './../../layout/sidebar/SideBar'
import Feed from './../../layout/feed/Feed'
import Rightbar from './../../layout/rightbar/Rightbar'
import './home.css'


export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="homeContainer">
                    <Sidebar displayName={this.props.displayName} />
                    <Feed displayName={this.props.displayName}/>
                    <Rightbar />
                </div>
                {/* <SelectPost /> */}
            </div>
        )
    }
}
