import React, { Component } from "react";
import "./App.less";
import { hot } from "react-hot-loader";
import Map from "./Map.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Map></Map>
            </div>
        );
    };
};

export default hot(module)(App);
