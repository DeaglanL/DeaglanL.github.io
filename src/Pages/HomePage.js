import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { BrowserView, MobileView, } from "react-device-detect";
import bg from "../Img/background.jpg"
import Mobbg from "../Img/MobileBG.jpg"
import { About } from "../Component/About"
import profilePic from "../Img/Profile.jpg";

const HomepageBG = {
   background: "rgb(24,37,201)",
   background: "radial-gradient(circle, rgba(24,37,201,1) 0%, rgba(83,135,183,1) 35%, rgba(11,25,66,1) 100%)",
 };
 

export class HomePage extends Component {
  


   render() {
      return (
         <div style={HomepageBG}>
            <BrowserView >
            {/*Add image for browser and verticle background for mobile */}
               <About></About>
            </BrowserView>
            <MobileView>
               <About></About>
            </MobileView>
         </div>
      );
   }
}


