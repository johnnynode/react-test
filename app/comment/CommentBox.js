"use strict";

import React from "react";

class CommentBox extends React.Component {
    render() {
        return (
            <div className="ui comments"></div>
        );
    }
}

// 导出 CommnetBox 作为默认的组件
export {CommentBox as default}