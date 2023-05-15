import React, { useState } from 'react'
import { styled } from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import sliderItems from "../data"

const Container = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
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
    left : ${props => props.direction === "left" && "10px"};
    right : ${props => props.direction === "right" && "10px"};
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
const Descriptioin = styled.p`
    margin : 50px 0 ;
    font-weight: 500;
    letter-spacing : 3px;
`
const Button = styled.button`
    padding:10px;
    font-size: 20px;
    background-color: transparent;
    cursor : pointer;
`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 3)
        }else{
            setSlideIndex(slideIndex < 3 ? slideIndex+1 : 0)
        }
    }
  return (
    <Container>
        <Arrow direction = "left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon />
        </Arrow>
        <Wrapper sliderindex={slideIndex}>
            {sliderItems.map((item) => (
                <Slide key={item.id} bg={item.bg}>
                <ImgContainer>
                    <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Descriptioin>{item.desc}</Descriptioin>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction = "right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon />
        </Arrow>
    </Container>
  )
}

export default Slider