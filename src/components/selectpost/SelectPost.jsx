import React, { Component } from 'react';
import './selectpost.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Posts } from './../../dataPost'
import CloseIcon from '@material-ui/icons/Close';


class SelectPost extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
                current: this.props.index,
                length: Posts.length,
                imageUrl:this.props.image,
            };
        }
    
    handleSelect = (e) => {
        if(e.target.matches(".selectpost") || e.target.matches(".selectCloseIcon")) {
            this.props.handleSelect();
        }
    }
    handleCloseForm = () => {
        this.props.handleSelect();
    }

    handlePrevImg = () => {
        if(this.state.current === 0) {
            this.setState({
                current : this.state.length -1
            })
        } else {
            this.setState({
                current: this.state.current - 1
            })
        }
    }


    handleNextImg = () => {
        
        if(this.state.current === this.state.length -1) {
            this.setState({
                current : 0
            })
        } else {
            this.setState({
                current: this.state.current + 1
            })
        }   
    }
    componentDidUpdate(preProps, preState) {
        if(this.state.current !== preState.current) {
            this.setState({
            imageUrl:[...Posts][this.state.current].photo,
        })
        }
    }
    


    render() {
        console.log(this.state.current);
        return (
            <div className ="selectpost" onClick={this.handleSelect}>
                <div className="selectpostContent">
                    <NavigateBeforeIcon className="selectpostIcon selectpostIconPrev" onClick={this.handlePrevImg} />
                     <div className="selectpostCenter" key={this.state.index}>
                         
                         <img src={this.state.imageUrl} alt="postImg" className="selectpostImg"/>
                         
                     </div>
                    <CloseIcon className="selectCloseIcon" onClick={this.handleCloseForm}/>
                    <NavigateNextIcon className= "selectpostIcon selectpostIconNext" onClick={this.handleNextImg}/>
                </div>
            </div>
        );
    }
}

export default SelectPost;