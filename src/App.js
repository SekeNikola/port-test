import React, { Component } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactFullpage from '@fullpage/react-fullpage';

import SingleProject from './components/SinglePortfolio'


gsap.registerPlugin(ScrollTrigger);

export default class App extends Component{

  render() {
    return (
      <>
        <ReactFullpage
        
        render={({ state, fullpageApi }) => {
         
      return (
        <ReactFullpage.Wrapper>
         <SingleProject />
        </ReactFullpage.Wrapper>
      );
    }}
  />
      </>
    )
  }

  

}

