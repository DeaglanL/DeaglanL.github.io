import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { IntroHeader, ShortDesc } from '../Style.js'
import Image from 'react-bootstrap/Image';
import dotnet from "../../Img/dotnet.png";
import pega from "../../Img/Pega.png";
import react from "../../Img/react.png";
import styled from 'styled-components';


export const ImgWrapper = styled.div`
    padding-top:5rem;
    padding-right:3rem;
    padding-bottom:5rem;
    padding-left:8rem;
`;

const HomePageBG = styled.div`
background: linear-gradient(90deg, rgba(2,0,36,1) 34%, rgba(9,9,121,1) 82%, rgba(5,106,185,1) 100%, rgba(0,212,255,1) 100%);; 
  background-size: cover;
`;


function XP(props) {
    return (
        <HomePageBG>
            <IntroHeader>Techknowlogies</IntroHeader>
            <Row>
                <Col>
                    <ImgWrapper>
                        <Image src={dotnet} width="150" height="150" roundedCircle  ></Image>
                    </ImgWrapper>
                </Col>
                <Col>
                    <ShortDesc >I am well good at dotnet honest</ShortDesc>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ImgWrapper>
                        <Image src={pega} width="150" height="150" roundedCircle  ></Image>
                    </ImgWrapper>
                </Col>
                <Col>
                    <ShortDesc >I'm good at Pega I just don't like it</ShortDesc>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ImgWrapper>
                        <Image src={react} width="150" height="150" roundedCircle  ></Image>
                    </ImgWrapper>
                </Col>
                <Col>
                    <ShortDesc >Look I made this so I atleast know how to do hello world</ShortDesc>
                </Col>
            </Row>
        </HomePageBG>
    );
}
export default XP;