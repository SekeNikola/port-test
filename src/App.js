import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SingleProject from './components/SinglePortfolio'


gsap.registerPlugin(ScrollTrigger);

const App = () =>{

  
    return (
      <>
        
         
         <SingleProject />
   </>
    )
  }

export default App