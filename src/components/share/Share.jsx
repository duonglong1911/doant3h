import React, { Component } from 'react';
import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"
import Modal from 'react-modal';
import Modals from './Modals';

class Share extends Component {
     constructor (props) {
        super(props);
        this.state = {
          modalIsOpen: false,
        }
      };
    componentDidMount() {
        Modal.setAppElement('body');
      };

      openModal = () => {
        this.props.openModal();
        this.setState({
          modalIsOpen: true,
        });
      };

      closeModal = () => {
        this.props.removeImage()
        this.setState({
          modalIsOpen: false,
        });
      };
    render() {
        const {modalIsOpen} = this.state
        return (
            <div className="share">
                <div className="shareWrapper">
                    <div className="shareTop">
                        <img className="shareProfileImg" src={this.props.displayName.photoURL} alt="" />
                        <input type="text" className="shareInput" placeholder="Bạn đang nghĩ gì thế?" onClick={this.openModal}/>
                    </div>
                    <hr className="shareHr" />
                    <div className="shareBottom">
                        <div className="shareOptions">
                            <div className="shareOption">
                                <PermMedia htmlColor="tomato" className="shareIcon"/>
                                <span className="shareOptionText">Ảnh/Video</span>
                            </div>
                            <div className="shareOption">
                                <Label htmlColor="blue"  className="shareIcon"/>
                                <span className="shareOptionText">Tag</span>
                            </div>
                            <div className="shareOption">
                                <Room htmlColor="green"  className="shareIcon"/>
                                <span className="shareOptionText">Địa điểm</span>
                            </div>
                            <div className="shareOption">
                                <EmojiEmotions htmlColor="goldenrod"   className="shareIcon"/>
                                <span className="shareOptionText">Cảm xúc</span>
                            </div>
                        </div>
                        
                    </div>
                    <Modals closeModal={this.closeModal} 
                        modalIsOpen={modalIsOpen} 
                        onChangeContent={this.props.onChangeContent}
                        onSubmitcmp={this.props.onSubmitcmp}
                        displayName={this.props.displayName}
                        upload={this.props.upload}
                        photo={this.props.photo}
                        onUploadFile={this.props.onUploadFile}
                        removeImage={this.props.removeImage}
                        newdata={this.props.newdata}
                        titleTxt={this.props.titleTxt}
                    />
                </div>
            </div>
        );
    }
}

export default Share;