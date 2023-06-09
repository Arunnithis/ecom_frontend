import React from 'react'
import  styled  from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info =styled.div`
    opacity:0;
    width: 100%;
    height: 100%;
    position:absolute;
    top:0;
    left:0;
    z-index: 3;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    transition:all 0.5s ease;
    flex-direction:column;
`
const Icon =styled.div`
    height: 40px;
    width: 40px;
    border-radius:50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:10px;
    cursor: pointer;
    transition:all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
  }
    ;
`

const Container = styled.div`
    flex:1;
    margin : 5px;
    min-width:280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: #f5fbfd;
    position:relative;
    &:hover ${Info} {
        opacity:1;
    }
`

const Circle =styled.div`
    width: 200px;
    height: 200px;
    border-radius:50%;
    background-color: white;
    position:absolute;

`
const Image =styled.img`
    height: 75%;
    z-index:2;  
`
const Title = styled.h1`
    color : white;
    text-shadow: 10px;
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Descr = styled.div`
    
`

const Product = ({prod}) => {
  return (
    <Container>
        <Circle />
        <Image src={prod.img} />
        <Info>
            <Icons>
                <Icon>
                    <ShoppingCartOutlinedIcon />
                </Icon>
                <Icon>
                    <SearchOutlinedIcon />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Icons>
            <Descr>
                <Title>
                    {prod.title}
                </Title>
            </Descr>
        </Info>
    </Container>
  )
}

export default Product