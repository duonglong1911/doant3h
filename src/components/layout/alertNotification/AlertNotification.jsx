import React, { Component } from 'react'
import './alertnotification.css'

export default class AlertNotification extends Component {

    // constructor(props)
    // {
    //     super(props);
    //     this.state = { 
    //         isToggleNotice:false,
    //     };
    // }


    render() {
        return (
            <div className="alert show">
                <span className="fas fa-exclamation-circle alertIcon"></span>
                <span className="alertMessage">Thành công: Bạn đã xóa bài viết ! </span>
                <span className="alertCloseBtn">
                    <span className="fas fa-times alertIconClose"></span>
                </span>
            </div>
        )
    }
}
