"use strict";

import 'semantic-ui/semantic.min.css!' // 导入css注意最后的!一定要有
import React from "react";
import ReactDom from "react-dom";
import {Router, Route, Link} from "react-router";

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <Link to="/" className="item">首页</Link>
                    <Link to="/tv" className="item">电视</Link>
                </div>
                {this.props.children}
            </div>
        )
    }
}

class TV extends React.Component {
    render() {
        return (
            <div>
                <div className="ui info message">电视节目列表</div>
                {this.props.children}
            </div>
        )
    }
}

class Show extends React.Component {
    render() {
        return (
            <h3>节目</h3>
        )
    }
}


ReactDom.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="tv" component={TV}>
                <Route path="shows:/id" component={Show} />
            </Route>
        </Route>
    </Router>
),document.getElementById("app"));