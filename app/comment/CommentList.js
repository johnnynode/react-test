"use strict";

import React from "react";
import Comment from "./Comment";

class CommentList extends React.Component {
    render() {
        let commentNodes = this.props.data.map((comment, index) => {
            return (
                <Comment key={index} author={comment.author} date={comment.date}>
                    {comment.text}
                </Comment>
            )
        });
        return (
            <div>
                <h3>评论列表</h3>
                {/* 这里就是props的应用 */}
                <div>
                    {commentNodes}
                </div>
            </div>
        );
    }
}

export {CommentList as default};