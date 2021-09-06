import React, { Component } from "react";
import "./profile.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import InstagramIcon from "@material-ui/icons/Instagram";
import Feed from './../../layout/feed/Feed';
import SelectPost from './../../selectpost/SelectPost'


class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imagesOfUser:[]
    }
  }
  componentDidMount() {
    const listPost = this.props.postsList.filter(el => el.userId === this.props.displayName.uid)
    const listImages= listPost.filter(el => el.photo !== undefined)
    this.setState({
      imagesOfUser:listImages,
    })
  }


  render() {
    const {imagesOfUser} = this.state;
    return (
      <div className="profile" key={this.props.displayName.uid}>
        <div className="profileWrapper">
          <div className="a"></div>
          <div className="profileContent">
            <div className="profileTop">
              <img
                src="http://t3h.edu.vn/sites/default/files/untitled-4.jpg"
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
                Contact for work: {this.props.displayName.email}
              </span>
            </div>

            <div className="profileCenter">
              <hr className="profileHr" />
              <div className="profileCenterContent">
                <div className="profileCenterIntro">
                  <span className="profileIntroTitle">Giới thiệu</span>
                  <ul className="profileIntroList" key={this.props.displayName}>
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
                  <hr/>
                  <span className="profileIntroTitle">Ảnh</span>
                  <div className="profileTotalImages">
                    <div className="container">
                      <div className="row">
                        {
                          imagesOfUser.map(image => {
                            return (
                              <div className="profileImageItem col-4" key={image.id}>
                              <img className="profileImageImg" src={image.photo} alt="" />
                            </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profileCenterFeed">
                  <Feed displayName={this.props.displayName}/>
                  {/* <SelectPost /> */}
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
