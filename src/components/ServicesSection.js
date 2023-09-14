import React from 'react'
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import { About, Description, Hide, Image } from '../styles';
import styled from 'styled-components';

const ServicesSection = () =>  {
  return (
    <Services>
        <Description>
            <h2> High <span>quality</span> services</h2>
            <Cards>
                <Card>
                    <div className='icon'>
                        <img src={clock} />
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                </Card>

                <Card>
                    <div className='icon'>
                        <img src={teamwork} />
                        <h3>Teamwork</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                </Card>

                <Card>
                    <div className='icon'>
                        <img src={diaphragm} />
                        <h3>Diaphragm</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                </Card>

                <Card>
                    <div className='icon'>
                        <img src={money} />
                        <h3>Affordable</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                </Card>
            </Cards>
        </Description>

        <Image>
            <img src={home2} />
        </Image>
    </Services>
  )
}

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 50%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;


const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;

`;

const Card = styled.div`
    flex-basis: auto;
    .icon{
        display: flex;
        align-items: center;
        padding-left: 1rem;
    }
`;

export default ServicesSection