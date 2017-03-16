import React, { Component , PropTypes } from 'react';
import { Button } from 'react-bootstrap';

class SayButton extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { word } = this.props;

        return (
            <Button bsStyle="success" onClick={() => alert(word)}>Say {word}</Button>
        )
    }
}

export default SayButton;