import React, { Component } from "react";

export default class MainScene extends Component {
    componentDidMount() {
        
    }
    render() {
        return [
            <a-scene embedded arjs>
                <a-marker preset="hiro">
                    <a-plane color="#f4f4f4" height="1" width="2" rotation="-90 0 0">
                        <a-text value="Ayy Lemao" color="#666"></a-text>
                    </a-plane>
                </a-marker>
                <a-entity camera look-controls></a-entity>
            </a-scene>
        ]
    }
}
