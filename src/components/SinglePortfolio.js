import React, {useRef, useEffect, useState} from 'react'
import Data from '../data/data'
import '../App.scss';


import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SinglePortfolio= () =>{


  // GSAP ANIMATIONS
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
          // markers: true
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
    // console.log(el);
  };

  const addToClientRef = el =>{
    if (el && !clientRef.current.includes(el)) {
      clientRef.current.push(el);
  }
  }

  // GSAP ANIMATIONS END

  
  
  const imageArray = []
  Data.map((img)=>{
    return imageArray.push(img.image)
  })

  // console.log(imageArray);
  
  

  function detectMouseWheelDirection( e )
  {
      var delta = null,
          direction = false
      ;
      if ( !e ) { // if the event is not provided, we get it from the window object
          e = window.event;
      }
      if ( e.wheelDelta ) { // will work in most cases
          delta = e.wheelDelta / 60;
      } else if ( e.detail ) { // fallback for Firefox
          delta = -e.detail / 2;
      }
      if ( delta !== null ) {
          direction = delta > 0 ? 'up' : 'down';
      }
  
      return direction;
  }

  
const [counter, setCount] = useState(0)
  let image = imageArray[counter]

  function increment (){
    setCount(counter + 1)
    image = image % imageArray.length
    console.log(setCount);
    image = imageArray[counter]
    console.log(image);
  }

  function decrement (){
    setCount(counter - 1)
    image = image % imageArray.length
    console.log(setCount);
    image = imageArray[counter]
    console.log(image);
  }

  

  function handleMouseWheelDirection(direction)
  {
      // console.log( direction ); // see the direction in the console
      if ( direction === 'down' ) {
          // do something, like show the next page
          increment()
          
      } else if ( direction === 'up' ) {
          // do something, like show the previous page
          decrement()
      } else {
          // this means the direction of the mouse wheel could not be determined
          console.log('whaaaaat');
      }
  }


  document.onmousewheel = function( e ) {
      handleMouseWheelDirection( detectMouseWheelDirection( e ) );
  };


  if ( window.addEventListener ) {
      document.addEventListener( 'DOMMouseScroll', function( e ) {
          handleMouseWheelDirection( detectMouseWheelDirection( e ) );
      });
  }
  
    return (
        <div>
              <img className="image" src={image} alt="" ref={addToImageRefs } />


            {/* {
             Data.map(({client, description, image}) => (
            <div className="section" key={client} >
              <div className="content">
              <h2>{client}</h2>
              <p className="description" ref={addToClientRef}> {description}</p>
              <img className="image" src={image} alt="" ref={addToImageRefs } />
            </div>
            </div>
          ))
             } */}
        </div>
    )
}

export default SinglePortfolio
