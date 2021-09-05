import React, { Component } from 'react';
import { PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons";
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-modal';
import './Modal.css';

class Modals extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            desc: '',
            file:'',
            isUploadFile:false,
            isEdit:false,
            photoEdit: '',
        }
    }
    componentDidMount() {
        const {post} = this.props;
        if(post){
            this.setState({
                isEdit:true,
                desc: post.desc,
                id: post.id,
                photoEdit: post.photo
            })
        }
    }
    upload = (e) =>{
        e.preventDefault();
        this.props.upload(this.state)
    }
    closeModal = () =>{
        this.props.closeModal()
        this.setState({
            desc: '',
            file:'',
        })
        this.removeImage();
    }
    onChangeContent = (e) =>{
        const target = e.target;
        const value = target.value;
        this.setState({
            desc:value,
        })
    }

    
    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmitcmp(this.state)
        this.props.closeModal()
        this.setState({
            desc: '',
            file:'',
        })
        this.removeImage();
    }

    onUploadFile =(e) => {
        this.props.onUploadFile(e)
        this.setState({
            isUploadFile:true,
        })
    }
    removeImage = () => {
        this.props.removeImage()
        this.setState({
            isUploadFile:false,
            photoEdit:''
        })
    }


    
    render() {
        const {isUploadFile, isEdit, photoEdit, desc} = this.state
        const {titleTxt, displayName, photo} = this.props;
        return (
                <Modal
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.closeModal}>
                    <div className="modalpost">
                        <div className="titlepost">
                            <div className="modalpost-p">
                                <h3>{titleTxt} bài viết</h3>
                                <button onClick={this.closeModal}><CloseIcon/></button>
                            </div>
                        </div>
                        <div className="form-Modalpost">
                            <div className="shareTop">
                                <img className="shareProfileImg" src={displayName.photoURL} alt="" />
                                <h4>{displayName.displayName}</h4>
                            </div>
                            <form action="" onSubmit={this.onSubmit}>
                                <textarea rows="5" cols="40" 
                                className="shareInput shareInput-modalpost" 
                                placeholder="What's in your mind ?"
                                onChange={this.onChangeContent}
                                name="desc"
                                value={desc}
                                autoFocus 
                                />
                                {!isEdit ? isUploadFile && (
                                    <div onClick={this.removeImage}>
                                        <img src={photo} alt="" width="150px" height="10%" style={{objectFit: 'cover'}} />
                                    </div>
                                ) : <div>
                                        {photoEdit === '' ? false : <img src={photoEdit} alt="" width="150px" height="10%" style={{objectFit: 'cover'}} />}
                                    </div>
                                 }
                                <br /><br />
                                <div style={{position: 'relative'}}>
                                <div className="shareOptions shareOptions-modalpost">
                                        <div className="shareOption shareOption-modalpost">
                                            <input type="file" className="overflow" name="file" onChange={this.onUploadFile}/>
                                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                                            <span className="shareOptionText">Photo or Video</span>
                                        </div>
                                        <div className="shareOption ">
                                            <Label htmlColor="blue"  className="shareIcon"/>
                                            <span className="shareOptionText">Tag</span>
                                        </div>
                                        <div className="shareOption">
                                            <Room htmlColor="green"  className="shareIcon"/>
                                            <span className="shareOptionText">Location</span>
                                        </div>
                                        <div className="shareOption">
                                            <EmojiEmotions htmlColor="goldenrod"   className="shareIcon"/>
                                            <span className="shareOptionText">Feelings</span>
                                        </div>
                                    
                                </div>
                                {isEdit && <div className="bg-gray"></div>}
                                </div>
                                <button className="shareButton shareButton-modalpost" type="submit">Share</button>
                            </form>
                        </div>
                    </div>
                </Modal>
        );
    }
}

export default Modals;