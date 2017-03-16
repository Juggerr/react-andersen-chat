import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import Layout from './Layout';
import Counter from './Counter';
import SayButton from './SayButton';

import 'bootstrap/dist/css/bootstrap.css';


// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
export default class App extends Component {
  render() {
    const title = (
      <h3>Panel title</h3>
    );

    return (
      <Layout>
        
        <Panel header={title} bsStyle="primary" className="main-panel">
          <ListGroup>
            <ListGroupItem>
              <SayButton word="Hello" />
            </ListGroupItem>
            <ListGroupItem>
              <Counter />
            </ListGroupItem>
            <ListGroupItem>
              <SayButton word="Bye" />
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </Layout>
    );
  }
}
