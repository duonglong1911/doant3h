import React, { Component } from 'react';
import firebase from 'firebase';
import './style-form.css'
import AdminPost from './adminPost';
import {Link} from 'react-router-dom';

class admin extends Component {
constructor(props){
super(props);
this.state = {
dataAdmin: [],
desc: '',
like: 0,
photo: '',
isUploadFile: false,
id: ''
}
}
componentDidMount(){
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
                userId: data[id].userId,
                like: data[id].like
            })
        }
        this.setState({
            dataAdmin: postList,
        })
    })

const firebaseLike = firebase.database().ref('setLike');
        firebaseLike.on('value', (res)=>{
            const data = res.val();
            let postList = []
            for(let id in data){
                postList.push({
                    id: id,
                    IdPost: data[id].IdPost,
                    IdUser: data[id].IdUser,
                    isLike: data[id].isLike,
                    classLike: data[id].classLike
                })
            }
            this.setState({
                dataSetLike: postList,
            })
        })
}
onDelete = (id) =>{
    const deletePost = firebase.database().ref('post');
        const deleteDataSetLike = firebase.database().ref('setLike');
        deletePost.child(id).remove();  
        this.state.dataSetLike.map(item=>item.IdPost === id ? deleteDataSetLike.child(item.id).remove() : false)
}
onChange = (event) =>{
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
        [name]: value
    })
}
onSubmit = (e) =>{
    e.preventDefault();
    const today = new Date();
    const second = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds();
    const hour = today.getHours() < 10 ? '0' + today.getHours() : today.getHours();
    const minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
    const date = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
    const month = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
    const time = hour + ':' + minutes + ':' + second + ' --- ' + date + '/' + month + '/' + today.getFullYear();
    if(this.state.id === ''){
        firebase.database().ref('post').push({
            desc:this.state.desc,
            photo:this.state.photo,
            userId: 'adminNoteBook',
            date:time,
            like: Number(this.state.like)
        })
        this.setState({
            desc: '',
            like:0,
            photo: '',
            isUploadFile: false,
        })
    }
    else{
        firebase.database().ref('post').child(this.state.id).update({
            desc: this.state.desc,
            photo:this.state.photo,
            date:time,
            like: Number(this.state.like)
        })
        this.setState({
            desc: '',
            like:0,
            photo: '',
            isUploadFile: false,
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
            isUploadFile: true,
        })
    }
}
removeImage = () =>{
    this.setState({
        photo: '',
        isUploadFile: false,
    })
}
onUpdate = (item, index) =>{
    const {dataAdmin} = this.state;
        if(dataAdmin[index].photo === '') {
            this.setState({
            id: item.id,
            desc: item.desc,
            photo: item.photo,
            like: item.like,
            isUploadFile: false
            })
        } else {
            this.setState({
                id: item.id,
                desc: item.desc,
                photo: item.photo,
                like: item.like,
                isUploadFile: true
            })
        }
}
render() {
const {dataAdmin, desc, like, photo, isUploadFile} = this.state
return (
    <div className='avc'>
        <Link to='/admin/' className="btn btn-primary">Bài viết</Link>
        <Link to='/admin/user/' className="btn btn-primary">Người dùng</Link>
        <form onSubmit={this.onSubmit}>

            <div className="form-group">
          <label htmlFor="exampleInputEmail1">nội dung</label>
          <input onChange={this.onChange} value={desc} name="desc" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter text"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">ảnh</label>
            <input value="" name="photo" type="file" className="form-control" id="exampleInputPassword1" onChange={this.onUploadFile} />
            {
                isUploadFile && <img onClick={this.removeImage} src={photo} alt="" width="10%"/>
            }
            
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail2">like</label>
          <input onChange={this.onChange} name='like' type="number" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" value={like} placeholder="Enter number" min={0}/>
        </div>
        <div style={{position: 'relative', margin: '10px 0', width: '10%'}}>
            {
                desc === '' && isUploadFile === false ? <div className="bg-gray"></div> : false
            }
            <button type="submit" style={{width: '100%'}} className="btn btn-primary">Submit</button>
        </div>
      </form>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col" className='text-center'>#</th>
                    <th scope="col" className='text-center'>nội dung</th>
                    <th scope="col" className='text-center'>ảnh</th>
                    <th scope="col" className='text-center'>thời gian</th>
                    <th scope="col" className='text-center'>like</th>
                    <th scope="col" className='text-center'>thao tác</th>
                </tr>
            </thead>
            <tbody>
                {dataAdmin.map((item, index)=>{
                return(
                    <AdminPost item={item} index={index} onDelete={this.onDelete} key={index} onUpdate={this.onUpdate}/>
                )
                })}
            </tbody>
        </table>
    </div>

);
}
}

export default admin;