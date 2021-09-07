import React, { Component } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './sidebar.css'


export default class SideBar extends Component {
    _isMounted = false;

    constructor(props)
    {
        super(props);
        this.state = {
            isScroll:false,
        };
    }

    componentDidMount() {
        this._isMounted = true;
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if(window.scrollY !==0 ) {
            this.setState({
                isScroll:true,
            })
        }
        if(window.scrollY ===0 ) {
            this.setState({
                isScroll:false,
            })
        }
    }

    scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        
    }
    componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}

    render() {
        return (
            <div className= "sidebar">
                <div className="sidebarWrapper">
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <img src={this.props.displayName.photoURL} alt="" className="sidebarImg" />
                            <span className="sidebarUsername">{this.props.displayName.displayName}</span>
                        </li>
                        <li className="sidebarListItem">
                            <img src="assets/icons/people.png" alt="" />
                            <span className="sidebarListItemText">People</span>
                        </li>
                        
                        <li className="sidebarListItem">
                            <img src="assets/icons/save.png" alt="" />
                            <span className="sidebarListItemText">Đã lưu</span>
                        </li>
                        <li className="sidebarListItem">
                            <img src="assets/icons/group.png" alt="" />
                            <span className="sidebarListItemText">Nhóm</span>
                        </li>
                        <li className="sidebarListItem">
                            <img src="assets/icons/images.png" alt="" />
                            <span className="sidebarListItemText">Ảnh và Video</span>
                        </li>
                        <li className="sidebarListItem">
                            <img src="assets/icons/event.png" alt="" />
                            <span className="sidebarListItemText">Sự kiện</span>
                        </li>
                        <li className="sidebarListItem">
                            <img src="assets/icons/weather.png" alt="" />
                            <span className="sidebarListItemText">Thời tiết</span>
                        </li>
                        <li className="sidebarListItem">
                            <div className="sidebarListItemBtn">
                                <i className="fas fa-chevron-down sidebarListItemBtnIcon"></i>
                            </div>
                            <span className="sidebarListItemText">Xem thêm</span>
                        </li>
                    </ul>
                    
                    <hr className="sidebarHr"/>
                    <div onClick={this.scrollTop} className={this.state.isScroll ? "feedButtonArrow" : "hide"}>
                        <ArrowUpwardIcon className="feedButtonArrowIcon" />
                    </div>
                     
                </div>
            </div>
        )
    }
}
