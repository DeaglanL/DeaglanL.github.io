import React  from 'react';
import About from "../../Component/About"
import styled from 'styled-components';
import background from "../../Img/background.jpg";



const HomePageBG = styled.div`
  /* background: radial-gradient(circle, rgba(24,37,201,1) 0%, rgba(83,135,183,1) 35%, rgba(11,25,66,1) 100%); */
  background: url(${background});
  background-size: cover;
`;



function HomePage(props) {
   return (
      <HomePageBG>
         {/*Add image for browser and verticle background for mobile */}
         <About></About>
      </HomePageBG>
   );
}
export default HomePage;


