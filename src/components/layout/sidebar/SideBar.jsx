import React, { Component } from 'react'
import { RssFeed } from '@material-ui/icons';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ChatIcon from '@material-ui/icons/Chat';
import GroupIcon from '@material-ui/icons/Group';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './sidebar.css'

export default class SideBar extends Component {
    render() {
        return (
            <div className= "sidebar">
                <div className="sidebarWrapper">
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <img src="/assets/images/anhtoi.jpg" alt="" className="sidebarImg" />
                            <span className="sidebarUsername">Dương Long</span>
                        </li>
                        <li className="sidebarListItem">
                            <GroupIcon htmlColor="blue"  className="sidebarIcon"/>
                            <span className="sidebarListItemText">People</span>
                        </li>
                        
                        <li className="sidebarListItem">
                            <ChatIcon className="sidebarIcon"/>
                            <span className="sidebarListItemText">Chat</span>
                        </li>
                        <li className="sidebarListItem">
                            <PermMediaIcon htmlColor="tomato" className="sidebarIcon"/>
                            <span className="sidebarListItemText">Images</span>
                        </li>
                        <li className="sidebarListItem">
                            <OndemandVideoIcon className="sidebarIcon"/>
                            <span className="sidebarListItemText">Video</span>
                        </li>
                        <li className="sidebarListItem">
                            <LocationOnIcon htmlColor="green" className="sidebarIcon"/>
                            <span className="sidebarListItemText">Location</span>
                        </li>
                        <li className="sidebarListItem">
                            <RssFeed className="sidebarIcon"/>
                            <span className="sidebarListItemText">Feed</span>
                        </li>
                        <li className="sidebarListItem">
                            <BookmarkIcon htmlColor="goldenrod" className="sidebarIcon"/>
                            <span className="sidebarListItemText">BookMark</span>
                        </li>
                    </ul>
                    <button className="sidebarButton">Show More</button>
                    <hr className="sidebarHr"/>
                </div>
            </div>
        )
    }
}
