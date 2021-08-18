import React, { Component } from 'react';
import './selectpost.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Posts } from './../../dataPost'


class SelectPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
                isNextImg: 0 
            };
        }
    
   handleSelect = (e) => {
        
        if(e.target.matches(".selectpost")) {
            this.props.handleSelect();
        }else if (e.target.matches(".selectpostIconPrev")){
            // index-=1;
        }else if (e.target.matches(".selectpostIconNext")){
           
        }
    }


     handleChangeImg = () => {
        // var {image} = this.props;
        var index = 0;
        index = [...Posts].findIndex(post => post.id===this.props.postID)
        index+=1;
        const newImage = [...Posts][index].photo;
        console.log(newImage);
        console.log(this.props.image);
        this.setState({
            isNextImg:1,
        })
    }
    render() {
        var {image} = this.props;
        
        return (
            <div className ="selectpost" onClick={this.handleSelect}>
                <div className="selectpostContent">
                    <NavigateBeforeIcon className="selectpostIcon selectpostIconPrev" />
                     <img src={this.state.isNextImg===1 ? this.newImage : image} alt="" className="selectpostImg"/>
                    <NavigateNextIcon className="selectpostIcon selectpostIconNext" onClick={this.handleChangeImg}/>
                </div>
            </div>
        );
    }
}

export default SelectPost;