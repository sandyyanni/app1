import React, { Component } from "react";
import {Card,Button} from 'react-bootstrap';

export default class ContactMe extends Component {
    render() {
        return (
            <div>
                <Card>
                  <Card.Body>
                    <section className="App inner-continer side App-section">
                      <h2>Interested in doing a project together?</h2>
                      <Button className="target target:hover" variant="outline-secondary" size="lg" href="mailto:sandyyanni3@gmail.com"><span>Contact Me &rarr;</span></Button>{' '}
                    </section>
                  </Card.Body>
              </Card>
            </div>
        )
    }
}