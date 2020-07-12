import React, {useRef, useEffect} from 'react'
import Data from '../data/data'
import '../App.scss';


import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SinglePortfolio= () =>{
  const headerRef = useRef(null);

  const imageRef = useRef([]);
  imageRef.current = [];

  const clientRef = useRef([])
  clientRef.current = []

  useEffect(() => {
    
    gsap.from(headerRef.current, {
      autoAlpha: 0, 
      ease: 'none',
      delay: 1
    });

    imageRef.current.forEach((el, index) => {
        
      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        duration: 1, 
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
          markers: true
        }
      });

    });

    clientRef.current.forEach((el, index) => {
        
      gsap.fromTo(el, {
        x: -100
      }, {
        duration: 1, 
        x: 0,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

    });

  }, []);

  const addToImageRefs = el => {
    if (el && !imageRef.current.includes(el)) {
        imageRef.current.push(el);
    }
    console.log(el);
  };

  const addToClientRef = el =>{
    if (el && !clientRef.current.includes(el)) {
      clientRef.current.push(el);
  }
  }

    return (
        <div>
            {
             Data.map(({client, description, image}) => (
            <div className="section" key={client} >
              <div className="content">
              <h2>{client}</h2>
              <p className="description" ref={addToClientRef}> {description}</p>
              <img className="image" src={image} alt="" ref={addToImageRefs } />
            </div>
            </div>
          ))
             }
        </div>
    )
}

export default SinglePortfolio
