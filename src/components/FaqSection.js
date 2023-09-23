import React from 'react'
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { LayoutGroup } from "framer-motion"


const FaqSection = () => {

  return (
    <div>
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <LayoutGroup>
                <Toggle className="question" title="How Do I Start?">        
                    <div className='answer'>
                        <p>Culpa do laboris quis minim velit. Minim veniam anim aliqua dolore dolor ea esse consectetur. Commodo laborum ipsum anim veniam sit magna consequat tempor eu mollit cillum id ipsum do. Dolor in cillum non velit aliquip. Cillum culpa mollit voluptate esse adipisicing eu adipisicing laborum culpa voluptate. Mollit irure magna amet officia ex voluptate anim duis officia aliqua anim adipisicing ea aliqua. Nulla esse deserunt nostrud cillum pariatur irure id anim.</p>
                    </div>      
                </Toggle>
                
                <Toggle className="question"  title="Daily schedule">        
                        <h4></h4>
                        <div className='answer'>
                            <p>Culpa do laboris quis minim velit.</p>                
                                <p>Culpa do laboris quis minim velit. Minim veniam anim aliqua dolore dolor ea esse consectetur. 
                                    Commodo laborum ipsum anim veniam sit magna consequat tempor eu mollit cillum id ipsum do.
                                    Dolor in cillum non velit aliquip. </p>                       
                        </div>            
                </Toggle>

                <Toggle className="question"  title="Different Payment Methods">              
                        <div className='answer'>
                        <p>Culpa do laboris quis minim velit.</p>                
                                <p>Culpa do laboris quis minim velit. Minim veniam anim aliqua dolore dolor ea esse consectetur. 
                                    Commodo laborum ipsum anim veniam sit magna consequat tempor eu mollit cillum id ipsum do.
                                    Dolor in cillum non velit aliquip. </p>                      
                        </div>              
                </Toggle>

                <Toggle className="question"  title="What Products do you offer?">   
                        <div className='answer'>
                            <p>Culpa do laboris quis minim velit. Minim veniam anim aliqua dolore dolor ea esse consectetur. Commodo laborum ipsum anim veniam sit magna consequat tempor eu mollit cillum id ipsum do. Dolor in cillum non velit aliquip. Cillum culpa mollit voluptate esse adipisicing eu adipisicing laborum culpa voluptate. Mollit irure magna amet officia ex voluptate anim duis officia aliqua anim adipisicing ea aliqua. Nulla esse deserunt nostrud cillum pariatur irure id anim.</p>
                        </div>        
                </Toggle>
            </LayoutGroup>
        </Faq>
    </div>
  );
};

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer{
        p{
            padding: 0rem;
            margin: 0rem;
        }
    }
    
`;

export default FaqSection;