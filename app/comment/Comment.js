"use strict";

import React from "react";

/* props 包含一些父组件传递给它的数据信息 */
class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <div className="content">
                    <span className="author">{this.props.author}</span>
                    <div className="metadata">
                        <span className="date">{this.props.date}</span>
                    </div>
                </div>

                <div className="text">{this.props.children}</div>
            </div>
        );
    }
}

export {Comment as default};