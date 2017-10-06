"use strict";

import 'semantic-ui/semantic.min.css!' // 导入css注意最后的!一定要有
import React from "react";
import ReactDom from "react-dom";
import CommentBox from "./comment/CommentBox";

// mock data
var comments = [
    {"author":"小明", "date": "2010-01-01", "text":"nice day today!"},
    {"author":"小红", "date": "2010-01-01", "text":"yeah, let's play!"}
];

// 显示组件的方法 ReactDom.render , 使用data属性传递数据
ReactDom.render(
    <CommentBox data={comments} />,
    document.getElementById("app")
);