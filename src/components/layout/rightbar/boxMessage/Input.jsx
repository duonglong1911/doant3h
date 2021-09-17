import React, { Component } from 'react'
import firebase from 'firebase';


export default class Input extends Component {
    constructor(props){
        super(props);
        this.state= {
           mess:''
        }
    }

    onSendMess= (e) => {
        e.preventDefault();
        const sendMessage = firebase.database().ref("boxMessage").child(this.props.idBox).child("messages");
        sendMessage.push({
            mess:this.state.mess,
            imageUserSend: this.props.displayName.photoURL,
            idUserSend:this.props.displayName.uid,
        });



        this.setState({
            mess:''
        })
    }
    onChangeText = (e) =>{
        const target = e.target;
        const value = target.value;
        this.setState({
            mess:value,
        })
    }

    render() {

        const {mess } = this.state;
        return (
            <form onSubmit={this.onSendMess}>
                <div className="input">
                    <input value={mess} className="inputInput" type="text" placeholder="Nhập tin nhắn.." onChange={this.onChangeText} />
                    <button className="btnSend" type="submit"><i className="btnSendIcon fas fa-paper-plane"></i></button>
                </div>
            </form>
        )
    }
}
