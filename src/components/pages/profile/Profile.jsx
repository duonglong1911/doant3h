import React, { Component } from "react";
import "./profile.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import InstagramIcon from "@material-ui/icons/Instagram";
import Feed from './../../layout/feed/Feed'


class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profileWrapper">
          <div className="a"></div>
          <div className="profileContent">
            <div className="profileTop">
              <img
                src="assets/images/post1.jpg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src={this.props.displayName.photoURL}
                alt=""
                className="profileAvatarImg"
              />
            </div>
            <div className="profileUserInfo">
              <h3 className="profileUsername">{this.props.displayName.displayName}</h3>
              <span className="profileUserDesc">
                Contact for work:0366369782
              </span>
            </div>

            <div className="profileCenter">
              <hr className="profileHr" />
              <div className="profileCenterContent">
                <div className="profileCenterIntro">
                  <span className="profileIntroTitle">Giới thiệu</span>
                  <ul className="profileIntroList">
                    <li className="profileIntroItem">
                      <WorkIcon className="profileIntroIcon" />
                      <span className="profileIntroDes">
                        Làm việc tại Hà Nội
                      </span>
                    </li>
                    <li className="profileIntroItem">
                      <SchoolIcon className="profileIntroIcon" />
                      <span className="profileIntroDes">Học tại Hà Nội</span>
                    </li>
                    <li className="profileIntroItem">
                      <HomeWorkIcon className="profileIntroIcon" />
                      <span className="profileIntroDes">Sống tại Hà Nội</span>
                    </li>
                    <li className="profileIntroItem">
                      <LocationOnIcon className="profileIntroIcon" />
                      <span className="profileIntroDes">Đến từ Hải Dương</span>
                    </li>
                    <li className="profileIntroItem">
                      <RssFeedIcon className="profileIntroIcon" />
                      <span className="profileIntroDes">
                        Có 5 người theo dõi
                      </span>
                    </li>
                    <li className="profileIntroItem">
                      <InstagramIcon className="profileIntroIcon" />
                      <a href="/" className="profileIntroDes">
                        duonglong20
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="profileCenterFeed">
                  <Feed displayName={this.props.displayName}/>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="a"></div>
        </div>
      </div>
    );
  }
}

export default Profile;
