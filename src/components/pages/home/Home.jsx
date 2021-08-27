import React, { Component } from 'react'
import Sidebar from './../../layout/sidebar/SideBar'
import Feed from './../../layout/feed/Feed'
import Rightbar from './../../layout/rightbar/Rightbar'
import './home.css'
import AlertNotification from '../../layout/alertNotification/AlertNotification'


export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="homeContainer">
                    <Sidebar />
                    <Feed />
                    <Rightbar />
                    <AlertNotification/>
                </div>
                {/* <SelectPost /> */}
            </div>
        )
    }
}
