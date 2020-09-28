import React from 'react';
import profilePic from "../../Img/Profile.jpg";
import Image from 'react-bootstrap/Image';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const IntroHeader = styled.header`
    text-align: center;
    vertical-align: middle;
    font-family: 'Coda Caption';font-size: 22px;
    color: white;
`;

const ShortDesc = styled.p`
    text-align: center;
    vertical-align: middle;
    font-family: Impact, Charcoal, sans-serif;
    color: white;
`;

function About(props) {

    return (
        <div >
            <Row>
                <Col>
                    <Image src={profilePic} width="200" height="200" rounded />
                </Col>
                <Col>
                    <IntroHeader>Hey, I'm Deaglan nice to meet you</IntroHeader>
                    <ShortDesc>I am a software developer based in Manchester looking for roles in software development and automated testing.</ShortDesc>
                </Col>
            </Row>
        </div>
    );
}
export default About;

