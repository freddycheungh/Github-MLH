import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainScene from "Components/MainScene";
import QRScanner from "Components/QRScanner";

export default class StandardContainer extends Component {
    render() {
        return(
            <Route render={({ location }) => (
                <Switch key={location.key} location={location}>
                    <Route exact path="/" component={QRScanner} />
                    <Route exact path="/ar" component={MainScene} />
                </Switch>
            )}/>
        );
    }
}