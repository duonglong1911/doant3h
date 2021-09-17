import React, { Component } from 'react';

class ListPeople extends Component {
    constructor(props){
        super(props);
        this.state= {
           isToggleBoxChat:false
        }
    }

    onOpenBox = (idUserReceive) => {
        this.props.onOpenBox(idUserReceive);
    }   

    render() {
        const {idUser,photo,displayName} = this.props;
        return (
            <div>
                <li className="sidebarFriend" onClick= {() => this.onOpenBox(idUser)} >
                    <div className="sidebarFriendOnline">
                            <img src={photo} alt="" className="sidebarFriendImg" />
                            <span className="sidebarFriendOnlineLeb"></span>
                    </div>
                        <span className="sidebarFriendName">{displayName}</span>
                </li>
            </div>
        );
    }
}

export default ListPeople;