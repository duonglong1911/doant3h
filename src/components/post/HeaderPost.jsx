import React, { Component } from 'react';
import { MoreVert} from "@material-ui/icons"
import { Users } from "./../../dataPost"

class HeaderPost extends Component {
    render() {
        var {post} = this.props;
        return (
            <div className="postTop">
                        <div className="postTopLeft">
                            <img className="postProfileImg" 
                            src={Users.filter((user) => user.id === post.userId)[0].profilePictrue} alt=""  
                            />
                            <span className="postUsername">{Users.filter((user) => user.id === post.userId)[0].userName}</span> <span className="postDate">{post.date}</span>
                        </div>
                        <div className="postTopRight">
                            <MoreVert />
                        </div>
                    </div>
        );
    }
}

export default HeaderPost;