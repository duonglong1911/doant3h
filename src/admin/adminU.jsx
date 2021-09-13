import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import './style-form.css';
import AdminUser from './adminUser';

class adminU extends Component {
    constructor(props){
        super(props);
        this.state = {
        dataAdminUser: [],
        }
        }
        componentDidMount(){
            const firebaseStore = firebase.database().ref('user');
            firebaseStore.on('value', (res)=>{
                const data = res.val();
                let postList = []
                for(let id in data){
                    postList.push({
                        id: id,
                        photo:data[id].photo,
                        uid: data[id].uid,
                        displayName: data[id].displayName,
                        email: data[id].email
                    })
                }
                this.setState({
                    dataAdminUser: postList,
                })
            })
        
        }
        onDelete = (item) =>{
            const deleteUser = firebase.database().ref('user');
            // const user = firebase.auth().currentUser;
            //     user.delete('HIXy1XyttYQrgDRaIFrjXgcKflM2');
                deleteUser.child(item.id).remove();  
        }
        render() {
        const {dataAdminUser} = this.state
        return (
            <div className='avc'>
                <Link to='/admin/' className="btn btn-primary">Bài viết</Link>
                <Link to='/admin/user/' className="btn btn-primary">Người dùng</Link>
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" className='text-center'>#</th>
                            <th scope="col" className='text-center'>tên</th>
                            <th scope="col" className='text-center'>ảnh</th>
                            <th scope="col" className='text-center'>email</th>
                            <th scope="col" className='text-center'>thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAdminUser.map((item, index)=>{
                        return(
                            <AdminUser item={item} index={index} onDelete={this.onDelete} key={index}/>
                        )
                        })}
                    </tbody>
                </table>
            </div>
        
        );
        }
}

export default adminU;