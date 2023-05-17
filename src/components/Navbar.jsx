import React from 'react'
import { styled } from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { mobile } from "../responsive"

const Container = styled.div`
height : 60px;
${mobile({height : "50px" })}
`
const Wrapper = styled.div`
padding : 10px 20px;
display :flex;
justify-content : space-between;
${mobile({padding : "10px 0" })}
`
const Language = styled.span`
font-size: 14px;
cursor : pointer;
${mobile({display : "none" })}
`
const SearchContainer =styled.div`
    border: 1px solid lightgray;
    display:flex;
    border-radius:10px;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({width : "50px" })}
`
const Left = styled.div`
    flex : 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex : 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 0px;
    ${mobile({fontSize : "24px" })}

`
const Right = styled.div`
    flex : 1;
    display : flex;
    align-items: center;
    justify-content:flex-end;
    ${mobile({flex : "2", justifyContent : "center" })}
`
const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize : "12px", marginLeft : "10px" })}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search" />
                    <SearchOutlinedIcon style={{color : "gray", fontsize : 12}} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>BuyIt</Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar