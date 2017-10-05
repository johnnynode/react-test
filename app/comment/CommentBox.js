"use strict";

import React from "react";

// 定义一个叫做CommentBox的 eact 组件
class CommentBox extends React.Component {
    render() {
        return (
            <div className="ui comments">评论</div>
        );
    }
}

// 导出 CommnetBox 作为默认的组件
export {CommentBox as default}