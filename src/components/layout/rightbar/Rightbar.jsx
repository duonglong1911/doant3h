import React, { Component } from 'react'
import "./rightbar.css"
import { Users } from "./../../../dataPost"

export default class Rightbar extends Component {
    render() {

       const listUser = Users.map(user => ( 
            <li className="sidebarFriend">
               <div className="sidebarFriendOnline">
                    <img src={user.profilePictrue} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendOnlineLeb"></span>
               </div>
                <span className="sidebarFriendName">{user.userName}</span>
            </li>
        ))

        return (
            <div className ="rightbar">
                <div className="rightbarWrapper">
                    <div className="rightbarTop">
                        <h5 className="rightbarTopTitle">Developed By:</h5>
                        <div className="rightbarTopDev">
                            <img src="/assets/images/user2.jpg" alt="" className="rightbarDevImg" />
                            <span className="rightbarTopName">Hải Long</span>
                        </div>
                        <div className="rightbarTopDev">
                            <img src="/assets/images/anhtoi.jpg" alt="" className="rightbarDevImg" />
                            <span className="rightbarTopName">Dương Long</span>
                        </div>
                    </div>
                    <hr className="rightbarHr" />
                    <div className="rightbarContent">
                        <h5 className="rightbarContentTitle">People:</h5>
                        <ul className="sidebarFriendList">
                            {listUser} 
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
