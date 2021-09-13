import React, { Component } from 'react'
import "./post.css"
import SelectPost from './../selectpost/SelectPost'
import HeaderPost from './HeaderPost';
import { MoreVert} from "@material-ui/icons"


export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
                isChecked: 0 ,
                images:[],
                index:0,
                comment:'',
                imgUser:this.props.displayName.photoURL,
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
            return 0;
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

    componentDidMount() {
         if(window.location.pathname === '/'){
            const postsHaveImg = this.props.postsList.filter(el => el.photo)
            this.setState({
                images: postsHaveImg,
            })
         } else if(window.location.pathname === `/profile/${this.props.displayName.uid}`) {
            this.setState({
                images: this.props.postHaveImagesOfUser
            })
    }}
    componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
    }
    //xử lí sự kiện submit comment
    postComment = (e) => {
        e.preventDefault();
        this.props.postComment(this.props.post.id, this.state.comment);
        this.setState({
            comment:''
        })
    }
    //lấy value input comment
    onChangeContent = (e) =>{
        const target = e.target;
        const value = target.value;
        this.setState({
            comment:value,
        })
    }

    render() {  
        var {post, dataSetLike, displayName} = this.props;
        var {comment} = this.state;
        var mapSetLike = dataSetLike.map(item=>item.IdUser === this.props.displayName.uid && item.IdPost === post.id ? item.classLike : 0)
        var filterSetLike = mapSetLike.filter(item=>item !== 0 ? item : 0)
        //convert object sang array để lặp
        if(post.comments) {
            var totalComments = Object.entries(post.comments).map(([key, value]) => ({key,value}));
        }
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
                        <div>
                            <span className="postText">{post.desc}</span>
                        </div>
                        <img className="postImg" src={post.photo} alt=""  onClick= {this.onClick }/>
                        <div className="postNumberLike">
                            <span className="postUsersLike">{post.like} Đã thích</span>
                            <hr className="postHr1"/>
                        </div>
                        <div className="postListFunction">
                            <div className="like"  onClick={this.onClickLike}>
                                { //đổi giao diện nút trái tim khi like
                                String(filterSetLike) === 'red' ?  
                                <svg aria-label="Bỏ thích" className="postFunctionIcon " fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                                : <svg aria-label="Thích" className="postFunctionIcon " fill="#969696" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                </svg>
                                }
                                <span>Thích</span>
                            </div>
                            <div className="postFunctionCommentIcon">
                                <svg aria-label="Bình luận" className="postFunctionIcon" fill="#969696" height="24" role="img" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
                                <span>Bình luận</span>
                            </div>
                            <div className="postFunctionShareIcon">
                                <svg aria-label="Chia sẻ bài viết" className="postFunctionIcon" fill="#969696" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                                <span>Chia sẻ</span>
                            </div>
                        </div>
                            <hr className="postHr2"/>

                        <form onSubmit ={this.postComment}>
                            <div className="postFunctionComment">
                            <div className="funcionCommentUser">
                                <img src={displayName.photoURL} width="32px" height="32px" alt=""/>
                            </div>
                            <div className="functionCommentInput">
                                <input type="text" placeholder="Thêm bình luận..." value={comment} onChange={this.onChangeContent}/>
                                <button className="btnSendComment" type="submit">Đăng</button>
                            </div>
                            </div>
                        </form>

                        <div className="functionCommentBox">
                            <div className="commentBox">
                                {totalComments ?
                                    totalComments.map(el => {
                                        return(
                                        <div key={el.key} className="d-flex mb-3">
                                            <img className="avatarUser" src={el.value.imageUser} width="32px" height="32px" alt=""/>
                                            <div className="commentContent">
                                                <span className="commentNameUser" >{el.value.nameUser}</span>
                                                <span className="commentContentCommemt">{el.value.comment}</span>
                                            </div>
                                            <span className="commemtIconOption" ><MoreVert/></span>
                                        </div>
                                        )
                                    }) :''
                                }
                            </div>
                            <span className="functionCommentShowmore">Xem thêm bình luận</span>
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
                            />
                     : ''
                }
            </div>
        )
    }
}
