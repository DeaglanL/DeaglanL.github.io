import React, { Component } from 'react';
import profilePic from "../Img/Profile.jpg";
import Image from 'react-bootstrap/Image';
import { Row, Col, Container } from 'react-bootstrap';

export class About extends Component {
    render() {
        return (
            <div >
                <Container>
                <Row>
                    <Col sm={8}>
                        <Image src={profilePic} width="200" height="200" center roundedCircle />
                    </Col>
                    <Col>
                    <div>
                        <span>Hey, I'm Deaglan nice to meet you</span>
                        </div>
                        <div>
                        <span>I am a software developer based in Manchester looking for roles in software development and automated testing.</span>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}
