import React from 'react'
import styled from 'styled-components';
import { About } from '../styles';


const FaqSection = () => {
  return (
    <div>
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className='question'>
                <h4>How Do I Start?</h4>
                <div className='answer'>
                    <p>Culpa do laboris quis minim velit. Minim veniam anim aliqua dolore dolor ea esse consectetur. Commodo laborum ipsum anim veniam sit magna consequat tempor eu mollit cillum id ipsum do. Dolor in cillum non velit aliquip. Cillum culpa mollit voluptate esse adipisicing eu adipisicing laborum culpa voluptate. Mollit irure magna amet officia ex voluptate anim duis officia aliqua anim adipisicing ea aliqua. Nulla esse deserunt nostrud cillum pariatur irure id anim.</p>
                </div>
                <div className='faq-line'></div>
            </div>

            <div className='question'>
                <h4>Daily schedule</h4>
                <div className='answer'>
                    <p>Culpa do laboris quis minim velit. Minim veniam anim aliqua dolore dolor ea esse consectetur. Commodo laborum ipsum anim veniam sit magna consequat tempor eu mollit cillum id ipsum do. Dolor in cillum non velit aliquip. Cillum culpa mollit voluptate esse adipisicing eu adipisicing laborum culpa voluptate. Mollit irure magna amet officia ex voluptate anim duis officia aliqua anim adipisicing ea aliqua. Nulla esse deserunt nostrud cillum pariatur irure id anim.</p>
                </div>
                <div className='faq-line'></div>
            </div>

            <div className='question'>
                <h4>Different Payment Methods</h4>
                <div className='answer'>
                    <p>Culpa do laboris quis minim velit. Minim veniam anim aliqua dolore dolor ea esse consectetur. Commodo laborum ipsum anim veniam sit magna consequat tempor eu mollit cillum id ipsum do. Dolor in cillum non velit aliquip. Cillum culpa mollit voluptate esse adipisicing eu adipisicing laborum culpa voluptate. Mollit irure magna amet officia ex voluptate anim duis officia aliqua anim adipisicing ea aliqua. Nulla esse deserunt nostrud cillum pariatur irure id anim.</p>
                </div>
                <div className='faq-line'></div>
            </div>

            <div className='question'>
                <h4>What Products do you offer?</h4>
                <div className='answer'>
                    <p>Culpa do laboris quis minim velit. Minim veniam anim aliqua dolore dolor ea esse consectetur. Commodo laborum ipsum anim veniam sit magna consequat tempor eu mollit cillum id ipsum do. Dolor in cillum non velit aliquip. Cillum culpa mollit voluptate esse adipisicing eu adipisicing laborum culpa voluptate. Mollit irure magna amet officia ex voluptate anim duis officia aliqua anim adipisicing ea aliqua. Nulla esse deserunt nostrud cillum pariatur irure id anim.</p>
                </div>
                <div className='faq-line'></div>
            </div>
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
            padding: 1rem 0 rem;
        }
    }
    
`;

export default FaqSection;