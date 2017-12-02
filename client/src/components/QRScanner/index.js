import React, { Component } from "react";
import QRActions from "../../action";
import { connect } from "react-redux";
const Instascan = require('instascan');

class QRScanner extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      const { trigger, history } = this.props;
      let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
      scanner.addListener('scan', (content) => {
        console.log(this.props);
        console.log(content);
        let QRData = {url: "freddycheungh.com", name: "Nike Air v5", maker: "Nike"}
        trigger(QRData);
        //history.push('/ar')
      });
      Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
          scanner.start(cameras[0]);
        } else {
          console.error('No cameras found.');
        }
      }).catch(function (e) {
        console.error(e);
      });
    }

    render() {
        return (
          <div>
            <video id="preview"></video>
          </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        trigger: (data) => {
            dispatch(QRActions(data));
        }
    }
}

export default connect(null, mapDispatchToProps)(QRScanner);