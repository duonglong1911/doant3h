import React, { Component } from 'react';
import Share from '../../share/Share'
import ".//feed.css"
import Post from '../../post/Post';
import firebase from 'firebase';
import AlertNotification from './../alertNotification/AlertNotification'


export default class Feed extends Component {
    constructor(props){
        super(props);
        this.state= {
            visible:10,
            newdata: null,
            photo: '',
            desc:'',
            date:'',
            userId:'',
            dataPost: [],
            isToggleNotice:false,
            type:'nothing',
            titleTxt:''
        }
    }
    
    componentDidMount(){
        // const {desc, photo, date, userId, dataPost} = this.state
        
        const firebaseStore = firebase.database().ref('post');
        firebaseStore.on('value', (res)=>{
            const data = res.val();
            let postList = []
            for(let id in data){
                postList.push({
                    id: id,
                    desc: data[id].desc,
                    photo: data[id].photo,
                    date: data[id].date,
                    userId: data[id].userId
                })
            }
            this.setState({
                dataPost: postList,
            })
        })
    }
    componentWillUnmount(){
        return this.state.dataPost
    }
    onSubmitcmp = (post) =>{
        
        const today = new Date();
        const hour = today.getHours() < 10 ? '0' + today.getHours() : today.getHours();
        const minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
        const date = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
       const month = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
        const time = hour + ':' + minutes + ' --- ' + date + '/' + month + '/' + today.getFullYear();
        if(post.id === ''){
            firebase.database().ref('post').push({
                desc:post.desc,
                photo:this.state.photo,
                userId: this.props.displayName.uid,
                date:time,
            })
            this.setState({
                isToggleNotice:true,
                type:'add',
            })
        }
        else{
            firebase.database().ref('post').child(post.id).set({
                desc: post.desc,
                photo: this.state.photo,
                userId: this.props.displayName.uid,
                date:time
            })
            this.setState({
                isToggleNotice:true,
                type:'edit',
            })
        }
        setTimeout(() => {
            this.setState({
             isToggleNotice:false,
            })
        }, 3000);
        this.removeImage()
    }
    upload = (post) =>{
        const storage = firebase.storage();
        const upLoadImage = storage.ref('images/'+post.file.name).put(post.file);
        upLoadImage.on(
            'state_change',
            snapshot =>{},
            error=>{
                console.log(error)
            },
            () =>{
                storage.ref('images').child(post.file.name).getDownloadURL()
                .then(url =>{
                    this.setState({
                        photo: url
                    })
                })
            }
        )
    }
    onDelete = (id) =>{
        const deletePost = firebase.database().ref('post');
        deletePost.child(id).remove();
        this.setState({
            isToggleNotice:true,
            type:'delete',
        })
        setTimeout(() => {
            this.setState({
             isToggleNotice:false,
            })
        }, 3000);
    }

    findIndex = (id) =>{
        var {dataPost} =this.state;
        var result = -1;
        dataPost.forEach((itemData, index) =>{
            if(itemData.id === id){
                result = index;
            }
        })
        return result
    }
    onEdit = (id) =>{
        var {dataPost} = this.state;
        var index = this.findIndex(id);
        var newdata = dataPost[index];
        if(dataPost[index].photo === undefined) {
            this.setState({
            newdata: newdata,
            photo:'',
            titleTxt: 'Sửa',
            })
        } else {
            this.setState({
            newdata: newdata,
            photo:dataPost[index].photo,
            titleTxt: 'Sửa', 
            })
        }
    }


    onUploadFile = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        
        reader.onload = (readerEvent) => {
            this.setState({
                photo:readerEvent.target.result,
            })
        }
    }

    removeImage = () => {
        this.setState({
            photo:null,
        })
    }


    openModal = () =>{
        this.setState({
            titleTxt: 'Tạo'
        })
    }
    handleVisible = () => {
        this.setState({
            visible: this.state.visible + 10,
        })
    }
    
    render() {
        const {dataPost, photo, isToggleNotice, titleTxt,visible} = this.state;
        dataPost.sort((a,b)=>{
            if(a.date.slice(19,23) > b.date.slice(19,23)){
                return -1
            }
            else{
                if(a.date.slice(16,18) > b.date.slice(16,18)){
                    return -1
                }
                else{
                    if(a.date.slice(15,17) > b.date.slice(15,17)){
                        return -1
                    }
                    else{
                        if(a.date.slice(0,2) > b.date.slice(0,2)){
                            return -1
                        }
                        else{
                            if(a.date.slice(3,5) > b.date.slice(3,5)){
                                return -1
                            }
                            else{
                                if(a.date.slice(6,8) > b.date.slice(6,8)){
                                    return -1
                                }
                            }
                        }
                    }
                }
            }
            return 0
        })
        return (
            <div className ="feed">
                <div className="feedWrapper">
                    <Share onChangeContent={this.onChangeContent}
                    onSubmitcmp={this.onSubmitcmp} 
                    displayName={this.props.displayName} 
                    upload={this.upload}
                    photo={photo}
                    onUploadFile={this.onUploadFile}
                    removeImage={this.removeImage}
                    newdata={this.state.newdata}
                    openModal={this.openModal}
                    titleTxt={titleTxt}
                    />
                    {dataPost.slice(0,visible).map((post,index) => {
                        if(window.location.pathname === '/'){
                            return(
                                <Post key={post.id}
                                    post={post} 
                                    index={index}
                                    onDelete={this.onDelete}
                                    onEdit={this.onEdit}
                                    onSubmitcmp={this.onSubmitcmp}
                                    displayName={this.props.displayName}
                                    upload={this.upload}
                                    photo={photo}
                                    onUploadFile={this.onUploadFile}
                                    removeImage={this.removeImage}
                                    postsList={this.props.postsList}
                                    titleTxt={titleTxt}
                                    closeModal={this.closeModal}
                                />
                            )
                        }
                        else{
                            if(post.userId === this.props.displayName.uid){
                                return(
                                    <Post key={post.id}
                                        post={post} 
                                        index={index}
                                        onDelete={this.onDelete}
                                        onEdit={this.onEdit}
                                        onSubmitcmp={this.onSubmitcmp}
                                        displayName={this.props.displayName}
                                        upload={this.upload}
                                        photo={photo}
                                        postsList={this.props.images}
                                        titleTxt={titleTxt}
                                        closeModal={this.closeModal}
                                    />
                                )
                            }
                            return false
                        }
                    })}
               
                <div className="feedButton">
                    <button className="feedButtonBtn" onClick={this.handleVisible}>Load more</button>
                </div>
                </div>
                { isToggleNotice ? <AlertNotification type={this.state.type} />:''}
                
            </div>
        )
    }
}