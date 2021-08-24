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
            userId: null
        }
    }
    componentDidMount() {
        const {post} = this.props;
        if(post){
            this.setState({
                desc: post.desc,
                id: post.id,
                userId: post.userId
            })
        }
        
    }
    closeModal = () =>{
        this.props.closeModal()
    }
    onChangeContent = (e) =>{
        // this.props.onChangeContent(e)
        this.setState({
            desc: e.target.value
        })
    }
    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmitcmp(this.state)
        this.props.closeModal()
        this.setState({
            desc: ''
        })
    }
    render() {
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
                                <img className="shareProfileImg" src="/assets/images/anhtoi.jpg" alt="" />
                                <h4>Dương Long</h4>
                            </div>
                            <form action="" onSubmit={this.onSubmit}>
                                <textarea rows="5" cols="40" 
                                className="shareInput shareInput-modalpost" 
                                placeholder="What's in your mind ?"
                                onChange={this.onChangeContent}
                                value={this.state.desc}
                                />
                                <div className="shareOptions shareOptions-modalpost">
                                    <div className="shareOption shareOption-modalpost">
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