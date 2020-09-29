import React from 'react';
import profilePic from "../../Img/Profile.jpg";
import XP from '../Expierence';
import Image from 'react-bootstrap/Image';
import { Row, Col } from 'react-bootstrap';
import {IntroHeader, ShortDesc} from '../Style.js'
import styled from 'styled-components';
import background from "../../Img/background.jpg";

export const ImgWrapper = styled.div`
    padding-top:5rem;
    padding-right:3rem;
    padding-bottom:5rem;
    padding-left:8rem;
`;

const HomePageBG = styled.div`
   background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(5,106,185,1) 76%, rgba(0,212,255,1) 100%); 
  /* background: url(${background}); */
  background-size: cover;
`;

function About(props) {

    return (
        <HomePageBG >
            <Row>
                <Col>
                    <ImgWrapper>
                        <Image src={profilePic} width="300" height="300" rounded />
                    </ImgWrapper>
                </Col>
                <Col>
                    <IntroHeader>Hey, I'm Deaglan nice to meet you</IntroHeader>
                    <ShortDesc>I am a software developer based in Manchester, looking for roles in software development and automated testing.</ShortDesc>
                </Col>
            </Row>
            <XP></XP>
        </HomePageBG>
    );
}
export default About;

