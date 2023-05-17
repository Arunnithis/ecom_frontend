import React from 'react'
import Navbar from '../components/Navbar'
import Anouncement from '../components/Anouncement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { styled } from 'styled-components';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container = styled.div``
const Wrapper = styled.div`
  padding:50px;
  display: flex;
  ${mobile({flexDirection : "column", padding : "10px" })}
`
const ImgContainer = styled.div`
  flex : 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height : "40%" })}
`
const InfoContainer = styled.div`
  flex:1;
  padding: 0 50px;
  ${mobile({padding : "10px" })}
`
const Title = styled.h1`
  font-weight: 200;

`
const Desc = styled.p`
  margin: 20px 0;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer =styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  width: 50%;
  ${mobile({width : "100%" })}
`
const Filter =styled.div`
  display: flex;
  align-items:center;
  justify-content: center;

`

const FilterTitle =styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor =styled.div`
  width: 20px;
  height: 20px;
  border-radius : 50%;
  background-color:${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`

const FilterSize =styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption =styled.option`

`

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${mobile({width : "100%" })}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border :1px solid teal;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 5px;
`
const Button = styled.div`
  padding: 15px;
  border :1px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight:500;
  &:hover {
    background-color: teal;
    color:white;
  }
`


const Product = () => {
  return (
    <Container>
        <Anouncement />
        <Navbar />
        <Wrapper>
          <ImgContainer>
            <Image src ="https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>Party Shirt</Title>
            <Desc>Fine fabric for most comfortable wear. Best suitable for Beach parties wear out t ostand out</Desc>
            <Price>₹499</Price>
            <FilterContainer>
            <Filter>
              <FilterTitle>Color </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="red" />
              <FilterColor color="yellow" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product
