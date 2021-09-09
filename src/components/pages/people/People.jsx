import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import "./people.css";

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: this.props.usersList,
    };
  }

  handleToggleBar = () => {
    document.querySelector('.peopleListOptionIconBtn').classList.remove('show')
    document.querySelector('.peopleListOptionIconBtn').classList.add('hide')
    document.querySelector('.peopleListOption').classList.remove('hide')
    document.querySelector('.peopleListOption').classList.add('show')
  }
  handleToggleBarClose = () => {
    document.querySelector('.peopleListOptionIconBtn').classList.remove('hide')
    document.querySelector('.peopleListOptionIconBtn').classList.add('show')
    document.querySelector('.peopleListOption').classList.remove('show')
    document.querySelector('.peopleListOption').classList.add('hide')
  }
  render() {
    const { usersList } = this.state;
    return (
      <div className="peopleWrapper">
      <div className="peopleListOptionIconBtn" onClick={this.handleToggleBar}>
            <i className="peopleListOptionIconBar fas fa-bars"></i>
      </div>
      <div className="people">
        <div className="peopleListOption">
          <div className="peopleListOptionClose" onClick={this.handleToggleBarClose}>
            <i className="peopleListOptionCloseBtn fas fa-times"></i>
          </div>
            <h3 className="peopleListOptionTitle">Danh sách</h3>
            <ul className="peopleOptions">
                <li className="peopleOptionItem">
                    <div className="peopleOptionItemBtn">
                        <i className="fas fa-star peopleOptionIcon"></i>
                    </div>
                    Người Thân
                </li>
                <li className="peopleOptionItem">
                    <div className="peopleOptionItemBtn">
                        <i className="fas fa-user-times peopleOptionIcon"></i>
                    </div>
                    Người bị hạn chế
                </li>
                <li className="peopleOptionItem">
                    <div className="peopleOptionItemBtn">
                        <i className="fas fa-user-friends peopleOptionIcon"></i>
                    </div>
                    Người quen
                </li>
                <li className="peopleOptionItem">
                    <div className="peopleOptionItemBtn">
                        <i className="fas fa-user-plus peopleOptionIcon"></i>
                    </div>
                    Người mới
                </li>
            </ul>
        </div>
        <div className="peopleListFriends">
          <div className="peopleFriends container-fluid">
            {/* <h3 className="peopleTitle">Mọi người:</h3> */}
            <div className="row">
              {usersList.map((user, index) => {
                const { id, photo, displayName } = user;
                return (
                  <div
                    className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6"
                    key={id}
                  >
                    <Card className="peopleCard mt-3">
                      <CardImg
                        className="peopleCardImg"
                        top
                        width="100%"
                        src={photo}
                        alt="Card image cap"
                      />
                      <CardBody className="peopleCardBody">
                        <CardTitle className="peopleCardName" tag="h5">
                          {displayName}
                        </CardTitle>
                        <Button className="peopleCardBtn">Trang cá nhân</Button>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
