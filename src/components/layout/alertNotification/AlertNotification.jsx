import React, { Component } from 'react'
import './alertnotification.css'

export default class AlertNotification extends Component {

    constructor(props)
    {
        super(props);
        this.state = { 
            noticeContent:'',
            isCloseNotice:false,
            typeColor:''
        };
    }
    

    componentDidMount() {
        if(this.props.type==="delete") {
            this.setState({
                noticeContent:"Thông báo: Bạn đã xóa bài viết!",
                typeColor:"deleteColor",
            })
        } else if (this.props.type==="edit") {
            this.setState({
                noticeContent:"Thông báo: Bạn đã sửa bài viết!",
                typeColor:"editColor",
            })
        }else if (this.props.type==="add") {
            this.setState({
                noticeContent:"Thông báo: Bạn đã thêm bài viết mới!",
                typeColor:"addColor",
            })
        }
    }

    handleCloseNotice = () => {
        this.setState({
            isCloseNotice:true
        })
    }

    render() {

        const { isCloseNotice, noticeContent, typeColor} = this.state;
        return (
            <div className={!isCloseNotice ? `alert show ${typeColor}` : "alert hide"}>
                <div className={typeColor}>
                    <span className={`fas fa-exclamation-circle alertIcon ${typeColor}`}></span>
                    <span className={`alertMessage ${typeColor}`}>{noticeContent} </span>
                    <span onClick={this.handleCloseNotice} className={`alertCloseBtn ${typeColor}`}>
                        <span className={`fas fa-times alertIconClose ${typeColor}`}></span>
                    </span>
                </div>
            </div>
        )
    }
}
