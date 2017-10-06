"use strict";

import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

// 定义一个叫做CommentBox的 eact 组件
class CommentBox extends React.Component {
    render() {
        return (
            /* return的时候必须使用一个根Dom节点 */
            <div className="ui comments">
                <h1 className="ui comments">评论</h1>
                <div className="ui divider"></div>
                <CommentList data={this.props.data}/>
                <CommentForm/>
            </div>
        );
    }
}

// 导出 CommnetBox 作为默认的组件
export {CommentBox as default}