import React, { Component } from 'react'
import {
  Card, CardImg, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './people.css'
import {Users} from './../../../dataPost.js'



export default class People extends Component {
    render() {
        return (
            <div className="people">
                <div className="container mt-5">
                    <h3 className="peopleTitle">Mọi người:</h3>
                    <div className="row mt-5">
                        {Users.map((user,index) => {
                        const {id, profilePictrue, userName} = user;
                        return (
                            <div className="col-2" key={id}>
                                <Card className="peopleCard">
                                    <CardImg className="peopleCardImg" top width="100%" src={profilePictrue} alt="Card image cap" />
                                    <CardBody className="peopleCardBody">
                                    <CardTitle className="peopleCardName" tag="h5">{userName}</CardTitle>
                                    <Button className="peopleCardBtn">Trang cá nhân</Button>
                                    </CardBody>
                                </Card>
                            </div>
                        )
                    })}
                    </div>

                </div>
            </div>
        )
    }
}
