import React, { Component } from 'react'
import "./post.css"
import { MoreVert} from "@material-ui/icons"
import { Users } from "./../../dataPost"

export default class Post extends Component {
    render() {
        console.log(this.props.post);
        var {post} = this.props;
        return (
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className="postProfileImg" src={Users.filter((user) => user.id === post.userId)[0].profilePictrue} alt="" />
                            <span className="postUsername">{Users.filter((user) => user.id === post.userId)[0].userName}</span> <span className="postDate">{post.date}</span>
                        </div>
                        <div className="postTopRight">
                            <MoreVert />
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">{post.desc}</span>
                        <img className="postImg" src={post.photo} alt="" />
                    </div>
                    {/* <div className="postBottom">
                        <div className="postBottomLeft">
                        </div>
                        <div className="postBottomRight">
                            <span className="postCommentText">9 comments</span>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
