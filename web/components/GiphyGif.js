import React from 'react';

const DIV_STYLE = {
    width: 427,
    height: 240,
    backgroundColor: 'blue' 
}

const GIF_STYLE = {
    display: 'block',
    margin: '0 auto',
}

const FETCH_OPTIONS = {
    method: 'GET',
    mode: 'no-cors',
    header: {
        'Access-Control-Allow-Origin':'*',
    }
  }

class GiphyGif extends React.Component {

    state = {
        gif: ''
    }

    setRef = (img) => {
        this.img = img;
    }

    search(query) {
        fetch(
            'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' 
            + encodeURIComponent(query) 
            + '&rating=PG-13'
            , FETCH_OPTIONS
        ).then(function(response) {
            console.log("R " + JSON.stringify(response));
            //return response.json();
        }).then(function(json) {
            console.log(JSON.stringify(json));
            this.setState({
                gif: json
            })
        }.bind(this));
    }

    render() {
        return  (
            <div style={DIV_STYLE}>
                <img ref={this.setRef} src={this.state.gif} style={GIF_STYLE} />
            </div>
        );
    }
}

export default GiphyGif;