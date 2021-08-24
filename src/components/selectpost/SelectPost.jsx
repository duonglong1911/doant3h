import React, { Component } from 'react';
import './selectpost.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Posts } from './../../dataPost'


class SelectPost extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
                isChangeImg: 1,
                imageUrl:this.props.image,
                index:[...Posts].findIndex(post => post.id===this.props.postID),
            };
        }
    
   handleSelect = (e) => {
        if(e.target.matches(".selectpost")) {
            this.props.handleSelect();
        }
    }



    handlePrevImg = () => {
        if(this.state.index < 1){
            this.setState({
                // isChangeImg:false,
                index:10
            })
            
        } else {
            this.setState({
                isChangeImg: -1,
                 index : this.state.index -1,
            })
        }
        const newImage = [...Posts][this.state.index].photo;
        this.setState({
            imageUrl:newImage,
        })
    }


     handleNextImg = () => {
        //  debugger
        if(this.state.index >= Posts.length){
            this.setState({
                // isChangeImg:false,
                index:0
            })
            
        } else {
            this.setState({
                isChangeImg:1,
                index :  this.state.index +1
            })
            const newImage = [...Posts][this.state.index].photo;
            this.setState({
                imageUrl:newImage,
        }) 
        }  
    }

    


    
    // componentDidMount() {
    // this.state.isChangeImg ===1 ? this.handlePrevImg() :this.handleNextImg(); 
    // }
    
    // a = componentDidUpdate() {
    //     if()
    // }

    render() {
        console.log(this.state.index);
        return (
            <div className ="selectpost" onClick={this.handleSelect}>
                <div className="selectpostContent">
                    <NavigateBeforeIcon className="selectpostIcon selectpostIconPrev" onClick={this.handlePrevImg} />
                     <img src={this.state.imageUrl} alt="postImg" className="selectpostImg"/>
                    <NavigateNextIcon className= "selectpostIcon selectpostIconNext" onClick={this.handleNextImg}/>
                </div>
            </div>
        );
    }
}

export default SelectPost;