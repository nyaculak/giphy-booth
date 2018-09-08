import React from 'react';

class GiphyGif extends React.Component {

    constructor(props) {
        this.props = props;
    }

    render() {
        return  (
            <View>
                <img src={this.props.query} />
            </View>
        );
    }
}