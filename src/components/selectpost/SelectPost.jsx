import React, { Component } from 'react';
import './selectpost.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import CloseIcon from '@material-ui/icons/Close';
import {Spring} from 'react-spring'

class SelectPost extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
                current: -1,
                length: 0,
                imageUrl:'',
                isToggleChangeImg:false,
            };
        }
    
    handleSelect = (e) => {
        if(e.target.matches(".selectpost")) {
            this.props.handleSelect();
        }
    }
    handleCloseForm = () => {
        this.props.handleSelect();
    }


    componentDidMount() {
         if(window.location.pathname === '/imagesgallery') {
            this.setState({
                imageUrl:this.props.image,
                length: this.props.postsList.length,
            })
        } else if(window.location.pathname === '/'){
            this.setState({
                isToggleChangeImg:true,
                current: this.props.index,
                length: this.props.images.length,
                imageUrl:this.props.post.photo,
            })
        } else {
            this.setState({
                isToggleChangeImg:false,
                current: this.props.index,
                length: this.props.images.length,
                imageUrl:this.props.post.photo,
            })
        }
    }
    handleNextImg = () => {
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


    handlePrevImg = () => {
        
        if(this.state.current === this.state.length -1) {
            this.setState({
                current : 1
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
            imageUrl:[...this.props.images][this.state.current].photo,
        })
        }
    }
    
               
    
    render() {
        const { isToggleChangeImg} = this.state;
        return (
        <Spring
            from={{ opacity:0}}
            to={{ opacity:1}}
            config={{delay:1000}}
        >
            {props => 
                <div style={props}>
                    <h1>Hello</h1>
                        <div className ="selectpost" onClick={this.handleSelect}>
                            <div className="selectpostContent">
                                {isToggleChangeImg ? <NavigateBeforeIcon className="selectpostIcon selectpostIconPrev" onClick={this.handlePrevImg} /> : ''}
                                <div className="selectpostImages" key={this.state.index}>
                                            <img src={this.state.imageUrl} alt="postImg" className="selectpostImg"/>
                                </div>
                                <CloseIcon className="selectCloseIcon" onClick={this.handleCloseForm}/>
                                {isToggleChangeImg ? <NavigateNextIcon className= "selectpostIcon selectpostIconNext" onClick={this.handleNextImg}/> : ''}
                            </div>
                        </div>
                </div>
            }
        </Spring>
                
        );
    }
}

export default SelectPost;