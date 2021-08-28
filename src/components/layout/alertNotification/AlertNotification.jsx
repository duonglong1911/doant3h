import React, { Component } from 'react'
import './alertnotification.css'

export default class AlertNotification extends Component {

    constructor(props)
    {
        super(props);
        this.state = { 
            isToggleNotice:false,
        };
    }

    handleToggleNotice = () => {
        console.log(this.props.handleToggleNotice.onDelete);
    }

    render() {
        const { isToggleNotice} = this.state;
        return (

            <div className={isToggleNotice ? "alert show" : "alert hide"}>
                <span className="fas fa-exclamation-circle alertIcon"></span>
                <span className="alertMessage">Thành công: Bạn đã xóa bài viết ! </span>
                <span className="alertCloseBtn">
                    <span className="fas fa-times alertIconClose"></span>
                </span>
            </div>
        )
    }
}
