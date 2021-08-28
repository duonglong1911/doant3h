import React, { Component } from 'react';
import { MoreVert} from "@material-ui/icons"
import { Users } from "./../../dataPost"
import Modal from 'react-modal';
import Modals from '../share/Modals';
import AlertNotification from '../layout/alertNotification/AlertNotification';

export default class HeaderPost extends Component {
constructor(props){
    super(props);
    this.state = {
        isToggle: false,
        modalIsOpen: false,
        isDelete:false,
    }
}
componentDidMount() {
    Modal.setAppElement('body');
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
  this.setState({
    isDelete:true,
  })
}
onEdit = () =>{
  this.openModal();
  this.props.onEdit(this.props.post.id);
  this.onClickToggle()
}

render() {
var {post} = this.props;
const {isToggle, modalIsOpen} = this.state
return (
<div className="postTop">
    <div className="postTopLeft">
        <img className="postProfileImg" src={Users.filter((user)=> user.id === post.userId)[0].profilePictrue} alt=""
        />
        <div className="postname">
            <span className="postUsername">{Users.filter((user) => user.id === post.userId)[0].userName}</span>
            <br />
            <span className="postDate">{post.date}</span>
        </div>
    </div>
    <div className="postTopRight">
        <MoreVert className="btn-show" onClick={this.onClickToggle} />
        {
        isToggle &&
        <ul className="menu-child">
            <li onClick={this.onEdit}>Edit</li>
            <li onClick={() => {if(window.confirm('Bạn có muốn xóa bài viết ?')){ this.onDelete(this.props.id)};}}>Delete</li>
        </ul>
        }
    </div>
    <Modals closeModal={this.closeModal} 
                modalIsOpen={modalIsOpen} 
                onChangeContent={this.props.onChangeContent}
                onSubmitcmp={this.props.onSubmitcmp}
                post={post}
                />
    <AlertNotification handleToggleNotice={this.onDelete} />
</div>
);
}
}