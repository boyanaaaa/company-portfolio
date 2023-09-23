import React from 'react';
import styled from "styled-components";
import {motion} from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';


const ContactUs = () => {
    return(
        <ContactSTyle variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{background: "#fff"}}>
            <Title> 
                <Hide>
                    <motion.h2 variants={titleAnim} style={{color: "#23d997", fontWeight: "500"}}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle/>
                        <h2>Send us a message.</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle/>
                        <h2>Send an email.</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle/>
                        <h2>Social media.</h2>
                    </Social>
                </Hide>
                
            </div>
        </ContactSTyle>
    )
}

const ContactSTyle =styled(motion.div)`
    padding: 5rem 10 rem;
    color: #353535;
    min-height: 90vh;
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background: #23d997;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 1rem;
        font-size: 2rem;
    }
`;

export default ContactUs;