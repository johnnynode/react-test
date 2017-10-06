"use strict";

import 'semantic-ui/semantic.min.css!' // 导入css注意最后的!一定要有
import React from "react";
import ReactDom from "react-dom";
import CommentBox from "./comment/CommentBox";

// 显示组件的方法 ReactDom.render , 使用data属性传递数据
ReactDom.render(
    <CommentBox url="app/comments.json" />,
    document.getElementById("app")
);