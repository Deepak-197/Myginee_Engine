import React, { useEffect, useState } from 'react';
import "./Slideshow.css";
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Link } from 'react-router-dom';


const getSlide = () => {
  return axios.get(`https://apis.myginee.com/v1/configuration/get/background/MGWA`)
}

export const Slideshow = () => {
    const [slide, setSlide] = useState([])


    useEffect(() => {
        getSlide().then((res) => {
            setSlide(res.data)
        }).catch((err) => {
          console.log(err)
        })
    }, [])

    console.log("Slideshow", slide)

    return (
      <div className='slideshow'>
            <Carousel interval={1000}>
      {
         slide.length>0 && slide.map((item, index) => {
          return (
              <Carousel.Item key={index}>
              <Link to={item.configuration.redirect}>
                <img
                  className='d-block w-100'
                  style={{height:400, padding:"5px"}}
                  src={item.resource}
                  alt='First slide'
                />
                </Link>
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
          )
        })
        }
            </Carousel>
       </div>
      );
}


        //  <Carousel>
        //   <Carousel.Item interval={1000}>
        //     <img
        //       className="d-block w-100"
        //       style={{height:400, padding:"5px"}}
        //       src="https://images.unsplash.com/photo-1674545187688-720f98297463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        //       alt="First slide"
        //     />
        //     <Carousel.Caption>
        //       <h3>First slide label</h3>
        //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item interval={500}>
        //     <img
        //       className="d-block w-100"
        //       style={{height:400, padding:"5px"}}
        //       src="https://images.unsplash.com/photo-1674763766874-a779ba110133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        //       alt="Second slide"
        //     />
        //     <Carousel.Caption>
        //       <h3>Second slide label</h3>
        //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <img
        //       className="d-block w-100"
        //       style={{height:400, padding:"5px"}}
        //       src="https://images.unsplash.com/photo-1674592309639-39067f6a8111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        //       alt="Third slide"
        //     />
        //     <Carousel.Caption>
        //       <h3>Third slide label</h3>
        //       <p>
        //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //       </p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <img
        //       className="d-block w-100"
        //       style={{height:400, padding:"5px"}}
        //       src="https://images.unsplash.com/photo-1675410541565-af66672ad1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        //       alt="Third slide"
        //     />
        //     <Carousel.Caption>
        //       <h3>Fourth slide label</h3>
        //       <p>
        //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //       </p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        // </Carousel> 