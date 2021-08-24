import React, { Component } from 'react';
import './selectpost.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Posts } from './../../dataPost'


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
        if(e.target.matches(".selectpost")) {
            this.props.handleSelect();
        }
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
        console.log(this.props.image);
        console.log(this.props.index);
        return (
            <div className ="selectpost" onClick={this.handleSelect}>
                <div className="selectpostContent">
                    <NavigateBeforeIcon className="selectpostIcon selectpostIconPrev" onClick={this.handlePrevImg} />
                     <div key={this.state.index}>
                         
                         <img src={this.state.imageUrl} alt="postImg" className="selectpostImg"/>
                         
                     </div>
                    <NavigateNextIcon className= "selectpostIcon selectpostIconNext" onClick={this.handleNextImg}/>
                </div>
            </div>
        );
    }
}

export default SelectPost;