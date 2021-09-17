import React, { Component } from 'react'
import BoxMessage from './boxMessage/BoxMessage';
import ListPeople from './ListPeople'
import firebase from 'firebase';

import "./rightbar.css"

export default class Rightbar extends Component {
    constructor(props){
        super(props);
        this.state= {
           isToggleBoxChat:false,
           idUserReceive:'',
           dataBoxes:[],
           idBox:''
        }
    }


    componentDidMount() {
        const firebaseLike = firebase.database().ref('boxMessage');
        firebaseLike.on('value', (res)=>{
            const data = res.val();
            let boxes = []
            for(let id in data){
                boxes.push({
                    id: id,
                    idCheck: data[id].idCheck,
                    messages: data[id].messages,
                    idMembers:data[id].idMembers,
                })
            }
            this.setState({
                dataBoxes: boxes,
            })
        })
    }


    onOpenBox = async (idUserReceive) => {
        const {dataBoxes} = this.state;
        console.log(dataBoxes);

         var p = await dataBoxes.filter(el => (el.idMembers[0] === this.props.displayName.uid && el.idMembers[1] === idUserReceive)|| (el.idMembers[0] === idUserReceive && el.idMembers[1] === this.props.displayName.uid ? el : ''))
         
        // dataBoxes.forEach(el => {
        //     console.log(el.idMembers.indexOf(this.props.displayName.uid));
        // })
        console.log(idUserReceive);


        await this.setState({
            isToggleBoxChat:true,
            idUserReceive,
        })




        // var bnv = dataBoxes.filter(el => 
        //     el.idCheck === `${this.props.displayName.uid}&${this.state.idUserReceive}` ? el : ''
        // )
        
       
         if(dataBoxes.indexOf(...p) === -1){
            await firebase.database().ref('boxMessage').push({
                    idCheck:`${this.props.displayName.uid}&${this.state.idUserReceive}`,
                    messages:[],
                    idMembers:[this.props.displayName.uid ,this.state.idUserReceive]
                })
        }

        if(p[0] && p[0].id){
            this.setState({
                idBox:p[0].id
            })
        } else {
            return 0
        }
    
    }
    onCloseBox = () => {
        this.setState({
            isToggleBoxChat:false
        })
    }
    componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
    }  
    

    render() {
    const { usersList} = this.props;
    const { isToggleBoxChat, idUserReceive,dataBoxes, idBox} = this.state;
    const l = dataBoxes.filter(el=> el.id === idBox)
    const box = l[0]
    
    
        return (
            <div className ="rightbar">
                <div className="rightbarWrapper">
                    <div className="rightbarTop">
                        <h5 className="rightbarTopTitle">Được phát triển bởi:</h5>
                        <div className="rightbarTopDev">
                            <img src="/assets/images/user2.jpg" alt="" className="rightbarDevImg" />
                            <span className="rightbarTopName">Hải Long</span>
                        </div>
                        <div className="rightbarTopDev">
                            <img src="/assets/images/anhtoi.jpg" alt="" className="rightbarDevImg" />
                            <span className="rightbarTopName">Dương Long</span>
                        </div>
                    </div>
                    <hr className="rightbarHr" />
                    <div className="rightbarContent">
                        <h5 className="rightbarContentTitle">Mọi người:</h5>
                        <ul className="sidebarFriendList">
                            {
                                usersList.map(user => ( 
                                    <ListPeople key={user.uid}
                                        photo={user.photo}
                                        displayName={user.displayName}
                                        idUser={user.uid}
                                        onOpenBox={this.onOpenBox}
                                    />
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={isToggleBoxChat ? "rightBarMessage" : "hide"}>
                    { box ?
                                <BoxMessage
                                    key={box.id}
                                    idBox={box.id}
                                    idUserReceive={idUserReceive}
                                    onCloseBox={this.onCloseBox}
                                    idCheck={box.idCheck}
                                    messages={box.messages}
                                    idMembers={box.idMembers}
                                    usersList={usersList} 
                                    displayName={this.props.displayName}
                                /> 
                                :''
                    }
                         
                </div>
            </div>
        )
    }
}
