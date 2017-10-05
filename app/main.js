"use strict";

import 'semantic-ui/semantic.min.css!'
import React from "react";
import ReactDom from "react-dom";
import CommentBox from "./comment/CommentBox";

// 显示组件的方法 ReactDom.render
ReactDom.render(
    <CommentBox />,
    document.getElementById("app")
);