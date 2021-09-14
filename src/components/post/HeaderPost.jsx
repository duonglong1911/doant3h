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
    this._isMounted = true;
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
componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
  }
render() {
  var {post} = this.props;
  const {isToggle, modalIsOpen, dataUser} = this.state;
  var dataAbc = dataUser.map(item=>item.uid === post.userId ? item.photo : '');
  var abc = dataAbc.filter(item=>item!=='');
  return (
  <div className="postTop">
      <div className="postTopLeft">
          <img className="postProfileImg" src={post.userId === 'adminNoteBook' ? 'https://sites.google.com/site/nguyenvanthucbg/_/rsrc/1347382664227/hinh-anh/11678818_9448507_uoxYwQn_300x450.jpg.1347382663933.jpg' : abc} alt=""/>
          <div className="postname">
              <span className="postUsername">{post.userId === 'adminNoteBook' ? 'Admin' : dataUser.map(item=>item.uid === post.userId ? item.displayName : '')}</span>
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
              <li onClick={this.onEdit}>Sửa bài</li>
              <li onClick={() => {if(window.confirm('Bạn có muốn xóa bài viết?')){this.onDelete(this.props.id)}}}>Xóa bài</li>
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
                  titleTxt={this.props.titleTxt}
                  />
  </div>
  );
}
}