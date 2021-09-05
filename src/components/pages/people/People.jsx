import React, { Component } from 'react'
import {
  Card, CardImg, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './people.css'



export default class People extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersList:this.props.usersList,
    };
  }
    
    render() {  
        const { usersList} = this.state;
        return (
            <div className="people">
                <div className="container mt-5">
                    <h3 className="peopleTitle">Mọi người:</h3>
                    <div className="row">
                        {usersList.map((user,index) => {
                        const {id, photo, displayName} = user;
                        return (
                            <div className="col-2" key={id}>
                                <Card className="peopleCard mt-5">
                                    <CardImg className="peopleCardImg" top width="100%" src={photo} alt="Card image cap" />
                                    <CardBody className="peopleCardBody">
                                    <CardTitle className="peopleCardName" tag="h5">{displayName}</CardTitle>
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
