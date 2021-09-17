import React, { Component } from 'react'

export default class Message extends Component {

    constructor(props){
        super(props);
        this.state= {
           isUserSend:false,
        }
    }
    componentDidMount() {
        if(this.props.idUserSend === this.props.displayName.uid) {
            this.setState({
                isUserSend:true
            })
        }
    }
    

    render() {
        const {mess, imageUserSend,idUserSend, displayName} = this.props;
        const { isUserSend} = this.state;
        return (
            <div className={isUserSend ? "messageWrapper UserSent" : "messageWrapper UserReceived"}>
                <div className={isUserSend ? "message sent" : "message received"}>
                    <img src={imageUserSend} width="32px" height="32px" alt="" className="messageAvatar" />
                    <span className="messageText">{mess}</span>
                </div>
            </div>
        )
    }
}
