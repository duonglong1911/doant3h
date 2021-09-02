import React, { Component } from 'react';
import { MoreVert} from "@material-ui/icons"
import Modal from 'react-modal';
import Modals from '../share/Modals';
import firebase from 'firebase';

export default class HeaderPost extends Component {
constructor(props){
    super(props);
    this.state = {
        isToggle: false,
        modalIsOpen: false,
        isDelete:false,
        dataUser: [],
    }
}
componentDidMount() {
    Modal.setAppElement('body');
    const firebaseStore = firebase.database().ref('user');
        firebaseStore.on('value', (res)=>{
            const data = res.val();
            let postList = []
            for(let id in data){
                postList.push({
                    id: id,
                    photo:data[id].photo,
                    uid: data[id].uid,
                    displayName: data[id].displayName
                })
            }
            this.setState({
              dataUser: postList,
            })
        })
  };

openModal = () => {
  this.setState({
    modalIsOpen: true,
  });
};

closeModal = () => {
  this.setState({
    modalIsOpen: false
  });
};
onClickToggle = () =>{
  this.setState({
  isToggle: !this.state.isToggle
  })
}
onDelete = () =>{
  this.props.onDelete(this.props.post.id)

}
onEdit = () =>{
  this.openModal();
  this.props.onEdit(this.props.post.id);
  this.onClickToggle()
}
render() {
var {post} = this.props;
const {isToggle, modalIsOpen, dataUser} = this.state;
var dataAbc = dataUser.map(item=>item.uid === post.userId ? item.photo : '');
var abc = dataAbc.filter(item=>item!=='');
return (
<div className="postTop">
    <div className="postTopLeft">
        <img className="postProfileImg" src={abc} alt=""/>
        <div className="postname">
            <span className="postUsername">{dataUser.map(item=>item.uid === post.userId ? item.displayName : '')}</span>
            <br />
            <span className="postDate">{post.date}</span>
        </div>
    </div>
    <div className="postTopRight">
      {
        post.userId === this.props.displayName.uid ? <MoreVert className="btn-show" onClick={this.onClickToggle} /> : false
      }
        
        {
        isToggle &&
        <ul className="menu-child">
            <li onClick={this.onEdit}>Edit</li>
            <li onClick={() => {if(window.confirm('Bạn có muốn xóa bài viết?')){this.onDelete(this.props.id)}}}>Delete</li>
        </ul>
        }
    </div>
    <Modals closeModal={this.closeModal} 
                modalIsOpen={modalIsOpen} 
                onChangeContent={this.props.onChangeContent}
                onSubmitcmp={this.props.onSubmitcmp}
                post={post}
                displayName={this.props.displayName}
                upload={this.props.upload}
                photo={this.props.photo}
                newdata={this.props.newdata}
                />
</div>
);
}
}