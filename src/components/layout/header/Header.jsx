import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./header.css";
import { Search, Person, Chat, Notifications, ExitToApp } from "@material-ui/icons"


export default class Header extends Component {
  render() {
    return (
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Facebook</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input type="text" className="searchInput" placeholder="Tìm kiếm"/>
          </div>
        </div>
        <div className="topbarRight">
          {/* <div className="topbarLinks">
            <span className="topbarLink">HomePage</span>
            <span className="topbarLink">Timeline</span>
            <span className="topbarLink"></span>
          </div> */}
          <div>
            <img src="/assets/images/anhtoi.jpg" alt="" className="topbarImg" />
            <span className="topbarUsername">Dương Long</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div><div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div><div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <ExitToApp />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
