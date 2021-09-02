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
            newdata: null,
            photo: null,
            desc:'',
            date:'',
            userId:'',
            dataPost: [],
            isToggleNotice:false,
            type:'nothing',
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
                dataPost: postList
            })
        })
    }
    onSubmitcmp = (post) =>{
        
        const today = new Date();
        
        if(post.id === ''){
            firebase.database().ref('post').push({
                desc:post.desc,
                photo:this.state.photo,
                userId: this.props.displayName.uid,
                date:today.getHours() + ':' + today.getMinutes() + ' --- ' + today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
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
                date:today.getHours() + ':' + today.getMinutes() + ' --- ' + today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
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
        this.setState({
            newdata: newdata,
            photo:newdata.photo,
        })
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



    render() {
        const {dataPost, photo, isToggleNotice} = this.state;
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
                    />
                    {dataPost.map((post,index) => {
                        // if(window.location.href === 'http://localhost:4000/'){
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
                                />
                            )
                        // }
                        // else{
                        //     if(post.userId === this.props.displayName.uid){
                        //         return(
                        //             <Post key={post.id}
                        //                 post={post} 
                        //                 index={index}
                        //                 onDelete={this.onDelete}
                        //                 onEdit={this.onEdit}
                        //                 onSubmitcmp={this.onSubmitcmp}
                        //                 displayName={this.props.displayName}
                        //                 upload={this.upload}
                        //                 photo={photo}
                        //             />
                        //         )
                        //     }
                        //     return false
                        // }
                    })}
                </div>
                { isToggleNotice ? <AlertNotification type={this.state.type} />:''}
            </div>
        )
    }
}