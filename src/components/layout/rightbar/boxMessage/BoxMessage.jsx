import React, { Component } from 'react'
import Message from './Message'
import Input from './Input'
import './boxmessage.css'


export default class BoxMessage extends Component {

    constructor(props){
        super(props);
        this.state= {
           nameUserReceived:'',
           avatarUserReceived:''
        }
    }
    onCloseBox = () => {
        this.props.onCloseBox()
    }


    componentDidMount(){
       const {idUserReceive,usersList} = this.props;
            const infoUserReceive = usersList.filter(el => el.uid === idUserReceive)
            const infoUserReceived = infoUserReceive[0]
            const nameUserReceived = infoUserReceived.displayName
            const avatarUserReceived = infoUserReceived.photo
            this.setState({
                nameUserReceived,
                avatarUserReceived,
            })
    }

    // componentDidUpdate(preProps, preState) {
    //     if(this.props.idUserReceive !== preProps.idUserReceive) {
            
    //     }
    // }


    render() {
        const {idUserReceive, messages, idMembers,usersList,idBox} = this.props;
        const {nameUserReceived,avatarUserReceived } = this.state;
        if(messages) {
            var totalMessages = Object.entries(messages).map(([key, value]) => ({key,value}));
        }

        
        return (
            <div className="boxMessage">
                <div className="boxMessageWrap">
                    <div className="boxMessageHeader">
                        <div className="messageHeaderUser">
                            <img src={avatarUserReceived} width="34px" height="34px" alt="" />
                            <span className="messageHeaderName">{nameUserReceived}</span>
                        </div>
                        <div className="messageHeaderBtnClose" onClick={this.onCloseBox}>
                            <i className="messageBtnCloseIcon fas fa-times"></i>
                        </div>
                    </div>
                    <div className="boxBody">
                        <div className="boxMessageContent">
                        {
                            totalMessages ? 
                            totalMessages.map(mess => {

                               return (
                                    <Message
                                    key={mess.key}
                                    mess={mess.value.mess}
                                    imageUserSend={mess.value.imageUserSend}
                                    idUserSend={mess.value.idUserSend}
                                    displayName={this.props.displayName}
                                />
                               )
                            }) : ''
                        }
                    </div>
                    </div>
                    <div className="boxMessageFooter">
                        <Input
                            idBox={idBox}
                            displayName={this.props.displayName}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
