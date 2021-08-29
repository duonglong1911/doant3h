import React, { Component } from 'react';
import Share from '../../share/Share'
import ".//feed.css"
import { Posts } from './../../../dataPost'
// import { v4 as uuidv4 } from 'uuid';
import Post from './../../post/Post';
import firebase from 'firebase';
import AlertNotification from './../alertNotification/AlertNotification'


export default class Feed extends Component {
    constructor(props){
        super(props);
        this.state= {
            data: [...Posts],
            newdata: null,
            photo:'',
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
    // onSubmitcmp = (post) =>{
    //     var {data} = this.state
    //     var today = new Date();
    //     var date = today.getHours() + ':' + today.getMinutes() + ' --- ' + today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
    //     if(post.id === ''){
    //         var newdata = {
    //             id: uuidv4(),
    //             desc: post.desc,
    //             userId: 1,
    //             date: date
    //         }
    //         data.unshift(newdata)
    //     }
    //     else{
    //         var index = this.findIndex(post.id);
    //         data[index] = post
    //     }
    //     this.setState({
    //         data: data,
    //         newdata: null
    //     })
    // }
    onDelete = (id) =>{
        const {data} = this.state;
        var index = this.findIndex(id);
            if(index !== -1){
                data.splice(index, 1);
                this.setState({
                    data: data
                })
            }
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
        var {data} =this.state;
        var result = -1;
        data.forEach((itemData, index) =>{
            if(itemData.id === id){
                result = index;
            }
        })
        return result
    }
    onEdit = (id) =>{
        var {data} = this.state;
        var index = this.findIndex(id);
        var newdata = data[index];
        this.setState({
            newdata: newdata
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
                    photo={photo}/>
                    {dataPost.map((post,index) => {
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
                                />
                            )
                        }
                        return false
                    })}
                </div>
                { isToggleNotice ? <AlertNotification type={this.state.type} />:''}
            </div>
        )
    }
}