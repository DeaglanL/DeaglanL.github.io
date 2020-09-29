import React  from 'react';
import About from "../../Component/About"
import styled from 'styled-components';
import background from "../../Img/background.jpg";



const HomePageBG = styled.div`
   background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(5,106,185,1) 76%, rgba(0,212,255,1) 100%); 
  /* background: url(${background}); */
  background-size: cover;
`;



function HomePage(props) {
   return (
      <div>
         {/*Add image for browser and verticle background for mobile */}
         <About></About>
      </div>
   );
}
export default HomePage;


