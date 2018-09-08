import React from 'react';
import Webcam from 'react-webcam';
import {Button} from 'react-bootstrap';

const WEBCAM_STYLE = {
    display: "block",
    margin: "0 auto",
}
const BUTTON_STYLE = {
    display: "block",
    margin: "5px auto",
}

class WebcamCapture extends React.Component {
    setRef = (webcam) => {
        this.webcam = webcam;
    }

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.props.onCapture(imageSrc);
    };

    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: 'user',
        };

        return (
            <div>
                <Webcam
                    ref={this.setRef}
                    width={1024}
                    height={576}
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    style={WEBCAM_STYLE}
                />
                <Button bsStyle="primary" style={BUTTON_STYLE} onClick={this.capture}>Capture</Button>
            </div>
        );
    }
}

export default WebcamCapture