import Link from 'next/link'
import {Grid, Row, Col} from "react-bootstrap";
import Head from '../components/head'
import Nav from '../components/nav'
import WebcamCapture from '../components/WebcamCapture';

export default class Index extends React.Component {

  async _handleCapture(imageSrc) {
    console.log("Captured Image");
    this.refs.image.src = imageSrc;

    const imageData = imageSrc.split(",")[1];
    const response = await fetch("http://localhost:5000/classify", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({image: imageData})
    });
    const responseJson = await response.json()
    console.log(responseJson)
  }

  render() {
    return (
      <div>
      <Head title="Home" />
      <Nav />
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={8}>
              <WebcamCapture onCapture={this._handleCapture.bind(this)} />
          </Col>
          <Col xs={4}>
            <img ref="image" width={427} height={240} style={{display: 'inline-block', margin: "0 auto"}} />
          </Col>
        </Row>
      </Grid>
      </div>
    )
  }
}
