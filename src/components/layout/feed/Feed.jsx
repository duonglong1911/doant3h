import React, { Component } from 'react';
import Share from '../../share/Share'
import ".//feed.css"
import { Posts } from './../../../dataPost'
import { v4 as uuidv4 } from 'uuid';
import Post from './../../post/Post'
import AlertNotification from '../alertNotification/AlertNotification';


export default class Feed extends Component {
    constructor(props){
        super(props);
        this.state= {
            data: [...Posts],
            newdata: null,
            isDelete:false,
        }
    }
    onSubmitcmp = (post) =>{
        var {data} = this.state
        var today = new Date();
        var date = today.getHours() + ':' + today.getMinutes() + ' --- ' + today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
        if(post.id === ''){
            var newdata = {
                id: uuidv4(),
                desc: post.desc,
                userId: 1,
                date: date
            }
            data.unshift(newdata)
        }
        else{
            var index = this.findIndex(post.id);
            data[index] = post
        }
        this.setState({
            data: data,
            newdata: null
        })
    }
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
            isDelete:true
        })
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
    // setTimeout(() => {
    //     this.setState({
    //         isDelete:false,
    //     })
    // }, 2000);
    
    render() {
        const {data,isDelete} = this.state
        return (
            <div className ="feed">
                <div className="feedWrapper">
                    <Share onChangeContent={this.onChangeContent} onSubmitcmp={this.onSubmitcmp}/>
                    {data.map((post,index) => (
                        <Post key={post.id}
                        post={post} 
                        index={index}
                        onDelete={this.onDelete}
                        onEdit={this.onEdit}
                        onSubmitcmp={this.onSubmitcmp}
                        />
                    ))}
                </div>
                { isDelete ? <AlertNotification />:''}
            </div>
            
        )
    }
}