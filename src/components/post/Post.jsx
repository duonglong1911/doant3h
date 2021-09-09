import React, { Component } from 'react'
import "./post.css"
import SelectPost from './../selectpost/SelectPost'
import HeaderPost from './HeaderPost';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
                isChecked: 0 ,
                images:[],
                index:-1,
            };
        }
        
    onClick = (e) => {
        this.setState({
            isChecked:1
        })
        this.state.images.map(el => {
            const index= this.state.images.findIndex(el => this.props.post.id === el.id)
            this.setState({
                index:index,
            })
            return false
        })
    } 
    handleSelect = () => {
        this.setState({
            isChecked: 0
        })
}
    
onClickLike = () =>{
    this.props.onClickLike(this.props.post)
}
    render() {     
        var {post, dataSetLike} = this.props;
        var mapSetLike = dataSetLike.map(item=>item.IdUser === this.props.displayName.uid && item.IdPost === post.id ? item.classLike : 0)
        var filterSetLike = mapSetLike.filter(item=>item !== 0 ? item : 0)
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
                      titleTxt={this.props.titleTxt}
                      closeModal={this.props.closeModal}
                      />
                    <div className="postCenter">
                        <pre className="postText">{post.desc}</pre>
                        <img className="postImg" src={post.photo} alt=""  onClick= {this.onClick }/>
                        <div className="like">
                            <FavoriteBorderIcon style={{cursor: 'pointer'}} className={String(filterSetLike)} onClick={this.onClickLike}/>
                            <span>{post.like} Like</span>
                        </div>
                    </div>
                </div>
                {this.state.isChecked=== 1 ? 
                    <SelectPost
                        postID ={post.id}
                        index={this.state.index}
                        handleSelect={this.handleSelect}
                        postsList={this.props.postsList} 
                        images={this.state.images}
                        post={post}

                    /> : ''
                }
            </div>
        )
    }
}
