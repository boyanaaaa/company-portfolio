import React from 'react';
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import { pageAnimation,fade, photoAnimation, lineAnimation, slider, sliderContainer } from '../animation';



const OurWork = () => {
    return(
        <Work variants={pageAnimation} initial='hidden' animate='show' exit='exit'  style={{background: '#fff'}} >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}/>
                <Frame2 variants={slider}/>
                <Frame3 variants={slider}/>
                <Frame4 variants={slider}/>
                </motion.div>
            <Movie>
                  <motion.h2 variants={fade}> The Athlete</motion.h2>
                  <motion.div variants={lineAnimation} className='line'></motion.div>
                  <Link >
                  <Hide>
                      <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
                  </Hide>
                  </Link>
            </Movie>
            <Movie>
                  <h2> The Theracer</h2>
                  <div className='line'></div>
                  <Link >
                
                      <img src={theracer} alt="theracer" />
                 
                  </Link>
            </Movie>
            <Movie>
                  <h2> The Goodtimes</h2>
                  <div className='line'></div>
                  <Link >
                      <img src={goodtimes} alt="goodtimes" />
                  </Link>
            </Movie>

        </Work>
    )
}

const Work =styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    background: #1b1b1b;
    h2{
        padding: 1rem 0rem;
        
    }
    @media (max-width: 1300px){
        padding: 2rem 2rem;
    }
`;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }

    h2{
        color: #cccccc;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(motion.div)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;