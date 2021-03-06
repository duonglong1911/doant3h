import React, { Component } from 'react';
import './selectpost.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import CloseIcon from '@material-ui/icons/Close';


class SelectPost extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            length: 0,
            current: -1,
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
        //tắt mở arrow change ảnh khi ở trang khác nhau
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
    //next ảnh 
    handleNextImg = () => {
        if(this.state.current === -1 || this.state.current === 0) {
            this.setState({
                current : this.state.length -1
            })
        } else {
            this.setState({
                current: this.state.current - 1
            })
        }
    }

    //pre ảnh 
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
    //đổi url ảnh khi thay đổi
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
            <>
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
            </>
        )
    }
}

export default SelectPost;