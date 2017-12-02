import React, { Component } from "react";

export default class MainScene extends Component {
    render() {
        return [
            <a-marker preset="hiro">
                <a-box position='0 0.5 0' material='color: black;'></a-box>
            </a-marker>,
            <a-entity camera></a-entity>
        ]
    }
}
