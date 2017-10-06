"use strict";

import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import $ from "jquery";

// 定义一个叫做CommentBox的 eact 组件
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.getComments();
        setInterval(() => this.getComments(), 5000);
    }

    getComments() {
        $.ajax({
            url: this.props.url,
            dataType: "json",
            cache: false,
            success: comments => {
                this.setState({data: comments});
            },
            error: (xhr, status, error) => {
                console.log(error);
            }
        });
    }

    render() {
        return (
            /* return的时候必须使用一个根Dom节点 */
            <div className="ui comments">
                <h1 className="ui comments">评论</h1>
                <div className="ui divider"></div>
                <CommentList data={this.state.data}/>
                <CommentForm/>
            </div>
        );
    }
}

// 导出 CommnetBox 作为默认的组件
export {CommentBox as default}