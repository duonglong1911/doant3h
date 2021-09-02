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
            isExistImg:false
        }
    }
    componentDidMount() {
        const {post} = this.props;
        if(post){
            this.setState({
                isEdit:true,
                desc: post.desc,
                id: post.id
            })
        }
        if(this.props.photo) {
            this.setState({
                isExistImg:true,
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
        })
    }

    render() {
        const {isUploadFile, isEdit,isExistImg} = this.state
        return (
                <Modal
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.closeModal}>
                    <div className="modalpost">
                        <div className="titlepost">
                            <div className="modalpost-p">
                                <h3>Tạo bài viết</h3>
                                <button onClick={this.closeModal}><CloseIcon/></button>
                            </div>
                        </div>
                        <div className="form-Modalpost">
                            <div className="shareTop">
                                <img className="shareProfileImg" src={this.props.displayName.photoURL} alt="" />
                                <h4>{this.props.displayName.displayName}</h4>
                            </div>
                            <form action="" onSubmit={this.onSubmit}>
                                <textarea rows="5" cols="40" 
                                className="shareInput shareInput-modalpost" 
                                placeholder="What's in your mind ?"
                                onChange={this.onChangeContent}
                                name="desc"
                                value={this.state.desc}
                                />
                                {!isEdit ? isUploadFile && (
                                    <div onClick={this.removeImage}>
                                        <img src={this.props.photo} alt="" width="200px" height="200px" style={{objectFit: 'cover'}} />
                                    </div>
                                ) : <div onClick={this.removeImage}>
                                    {isExistImg ? <img src={this.props.photo} alt="" width="200px" height="200px" style={{objectFit: 'cover'}} /> : ''}
                                    </div>
                                 }
                                <br /><br />
                                {/* <button onClick={this.upload}>upload</button> */}
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
                                <button className="shareButton shareButton-modalpost" type="submit">Share</button>
                            </form>
                        </div>
                    </div>
                </Modal>
        );
    }
}

export default Modals;