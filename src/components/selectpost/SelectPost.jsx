import React, { Component } from 'react';
import './selectpost.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Posts } from './../../dataPost'


class SelectPost extends Component {
    
   handleSelect = (e) => {
        var index = 0;
        index = [...Posts].findIndex(post => post.id===this.props.postID)
        if(e.target.matches(".selectpost")) {
            this.props.handleSelect();
        }else if (e.target.matches(".selectpostIconPrev")){
            // index-=1;
        }else if (e.target.matches(".selectpostIconNext")){
            index+=1;
            const newImage = [...Posts][index].photo;
            console.log(newImage);
            console.log(this.props.image);
        }
    }
    
    render() {
        var {image} = this.props;
        return (
            <div className ="selectpost" onClick={this.handleSelect}>
                <div className="selectpostContent">
                    <NavigateBeforeIcon className="selectpostIcon selectpostIconPrev"/>
                    <img src={image} alt="" className="selectpostImg"/>
                    <NavigateNextIcon className="selectpostIcon selectpostIconNext" />
                </div>
            </div>
        );
    }
}

export default SelectPost;