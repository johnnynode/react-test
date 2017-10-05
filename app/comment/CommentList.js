"use strict";

import React from "react";
import Comment from "./Comment";

class CommentList extends React.Component {
    render() {
        return (
            <div>
                <h3>评论列表</h3>
                <Comment author="Johnny" date="3分钟前">天气不错啊！</Comment>
                <Comment author="Tony" date="5分钟前">天气不错啊！</Comment>
                <Comment author="Lucy" date="12分钟前">除去走走！</Comment>
            </div>
        );
    }
}

export {CommentList as default};