import React, { useState } from 'react'
import { styled } from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import sliderItems from "../data"
import { mobile } from '../responsive';

const Container = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display : "none" })}
`
const ArrowLeft = styled.div`
    width : 50px;
    height : 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff7f7;
    position: absolute;
    top: 0;
    bottom: 0;
    left : 10px;
    margin:auto;
    cursor:pointer;
    opacity : 0.5;
    z-index: 2;
`
const ArrowRight = styled.div`
    width : 50px;
    height : 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff7f7;
    position: absolute;
    top: 0;
    bottom: 0;
    right : 10px;
    margin:auto;
    cursor:pointer;
    opacity : 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform:translateX(${props=>props.sliderindex * -100}vw);
`
const Slide = styled.div`
    width: 100vw;
    height:100vh;
    display : flex;
    align-items: center;
    background-color: #${props => props.bg};

`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height:80%;
`
const InfoContainer = styled.div`
    padding:50px;
    flex: 1;
`
const Title = styled.h1`
    font-size:70px;
`
const Description = styled.p`
    margin : 50px 0 ;
    font-weight: 500;
    letter-spacing : 3px;
`
const Button = styled.button`
    padding:10px;
    font-size: 20px;
    background-color: transparent;
    cursor : pointer;
    &:hover{
        background-color: black;
        color : white;
    }
`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }
  return (
    <Container>
        <ArrowLeft direction = "left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon />
        </ArrowLeft>
        <Wrapper sliderindex={slideIndex}>
            {sliderItems.map((item) => (
                <Slide key={item.id} bg={item.bg}>
                <ImgContainer>
                    <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <ArrowRight direction = "right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon />
        </ArrowRight>
    </Container>
  )
}

export default Slider