import React, { Component } from "react";
import { MoreVert } from "@material-ui/icons";
import firebase from 'firebase';


class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToogleOption: false,
      onEditCmt: false,
      comment:'',
      valueComment: this.props.value.comment,
      isToggleEdit:false,
      isToggleDelete:false,
    };
  }
  onChangeContent = (e) =>{
        const target = e.target;
        const value = target.value;
        this.setState({
            comment:value,
        })
    }
    editComment = (e) => {
        e.preventDefault();
        this.setState({
            onEditCmt:false,
            valueComment:this.state.comment,
        })

        const updateComment = firebase.database().ref("post").child(this.props.postID).child("comments");
        updateComment.child(this.props.keyCmt).update({
            comment:this.state.comment,
            imageUser: this.props.displayName.photoURL,
            nameUser:this.props.displayName.displayName,
            idUser:this.props.displayName.uid,
        });
    }
  handleToggleOption = () => {
    this.setState({
      isToggleOption: !this.state.isToggleOption,
    });
  };
  handleDeleteCmt = (idCmt) => {
    this.props.handleDeleteCmt(idCmt, this.props.postID);
  };
  handleEditCmt = () => {
    this.setState({
      onEditCmt: true,
    });
  };

  handleCancelEditCmt = () => {
    this.setState({
        onEditCmt:false
    })
  }
  componentDidMount() {
          if(this.props.value.idUser === this.props.displayName.uid) {
              this.setState({
                  isToggleEdit:true,
              })
          } else {
              this.setState({
                  isToggleEdit:false
              })
          }
  }

  render() {
    const { index, keyCmt, value, displayName,isToggleBtnOption } = this.props;
    const { isToggleOption, onEditCmt,valueComment,isToggleEdit } = this.state;
    return (
      <div key={keyCmt} className="d-flex mb-3 listComment">
        {!onEditCmt ? (
          <div className="commentItem">
            <img
              className="avatarUser"
              src={value.imageUser}
              width="32px"
              height="32px"
              alt=""
            />
            <div className="commentContent">
              <span className="commentNameUser">{value.nameUser}</span>
              <span className="commentContentCommemt">{valueComment}</span>
            </div>
             
            <span
              className="commemtIconOption"
              onClick={() => this.handleToggleOption(keyCmt)}
            >
              {isToggleBtnOption|| value.idUser === displayName.uid?<MoreVert /> :''}
              {isToggleOption && (
                <div key={index}>
                  <ul className="menuOption">
                    {isToggleEdit ? <li className="menuOptionItem" onClick={this.handleEditCmt}>
                      S???a b??nh lu???n
                    </li> : ''}
                    <li
                      className="menuOptionItem"
                      onClick={() => {
                        if (window.confirm("B???n c?? mu???n x??a comment?")) {
                          this.handleDeleteCmt(keyCmt);
                        }
                      }}
                    >
                      X??a b??nh lu???n
                    </li>
                  </ul>
                </div>
              )}
            </span>  
            
          </div>
        ) : (
          <form className="formComment" onSubmit={this.editComment}>
            <div className="postFunctionComment">
              <div className="funcionCommentUser">
                <img
                  src={displayName.photoURL}
                  width="32px"
                  height="32px"
                  alt=""
                />
              </div>
              <div className="functionCommentInput">
                <input
                  type="text"
                  placeholder="Th??m b??nh lu???n..."
                  defaultValue={value.comment}
                  onChange={this.onChangeContent}
                />
                <button className="btnSendCommentItem" type="submit">
                  ????ng
                </button>
              </div>
            </div>
                <span className="commentNoticeCancle">Nh???p Esc ????? <button onClick={this.handleCancelEditCmt} className="commentBtnCancle">H???y</button></span>
          </form>
        )}
      </div>
    );
  }
}

export default Comment;
