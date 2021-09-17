import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        const {mess, imageUserSend,idUserSend} = this.props;
        return (
            <div className="message sent">
                <img src={imageUserSend} width="30px" height="30px" alt="" className="messageAvatar" />
                <span className="messageText">{mess}</span>
            </div>
        )
    }
}
