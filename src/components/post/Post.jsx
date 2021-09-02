import React, { Component } from 'react'
import "./post.css"

import SelectPost from './../selectpost/SelectPost'
import HeaderPost from './HeaderPost';

export default class Post extends Component {
        constructor(props) {
            super(props);
            this.state = {
                 isChecked: 0 
                };
            }
        
       onClick = (e) => {
            this.setState({
                isChecked:1
            }) 
        } 
        handleSelect = () => {
            this.setState({
                isChecked: 0
            })
        }

    render() {      
        var {post, index} = this.props;
        return (
            <div className="post">
                <div className="postWrapper">
                    <HeaderPost post={post}
                     onDelete={this.props.onDelete}
                      onEdit={this.props.onEdit}
                      onSubmitcmp={this.props.onSubmitcmp}
                      displayName={this.props.displayName}
                      upload={this.props.upload}
                      photo={this.props.photo}
                      />
                    <div className="postCenter">
                        <span className="postText">{post.desc}</span>
                        <img className="postImg" src={post.photo} alt=""  onClick= {this.onClick }/>
                    </div>
                    {/* <div className="postBottom">
                        <div className="postBottomLeft">
                        </div>
                        <div className="postBottomRight">
                            <span className="postCommentText">9 comments</span>
                        </div>
                    </div> */}
                </div>
                {this.state.isChecked=== 1 ? <SelectPost image ={post.photo} 
                postID ={post.id} index={index}
                handleSelect={this.handleSelect}  /> : ''}
            </div>
        )
    }
}
