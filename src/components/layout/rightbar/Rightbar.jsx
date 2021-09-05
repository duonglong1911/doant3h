import React, { Component } from 'react'
import "./rightbar.css"

export default class Rightbar extends Component {
    
    render() {
    const { usersList} = this.props;
        

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
                            {
                                usersList.map(user => ( 
                                    <li className="sidebarFriend" key={user.uid}>
                                    <div className="sidebarFriendOnline">
                                            <img src={user.photo} alt="" className="sidebarFriendImg" />
                                            <span className="sidebarFriendOnlineLeb"></span>
                                    </div>
                                        <span className="sidebarFriendName">{user.displayName}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
