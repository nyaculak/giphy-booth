import Link from 'next/link'
import {Grid, Row, Col} from "react-bootstrap";
import Head from '../components/head'
import Nav from '../components/nav'
import WebcamCapture from '../components/WebcamCapture';

export default class Index extends React.Component {

  _handleCapture(imageSrc) {
    console.log(`Image Captured: ${imageSrc}`);
    this.refs.image.src = imageSrc;
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
