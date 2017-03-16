import React, { Component , PropTypes } from 'react';
import { Button } from 'react-bootstrap';


class HelloButton extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Button onClick={() => alert('Hello!')}>Say Hello</Button>
        )
    }
}

export default HelloButton;