import React, { Component } from 'react'
import Header from './../../layout/header/Header'
import Sidebar from './../../layout/sidebar/SideBar'
import Feed from './../../layout/feed/Feed'
import Rightbar from './../../layout/rightbar/Rightbar'
import './home.css'
import SelectPost from '../../selectpost/SelectPost'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
                </div>
                {/* <SelectPost /> */}
            </div>
        )
    }
}
