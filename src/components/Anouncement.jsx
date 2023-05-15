import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    height: 30p;
    background-color: teal;
    color:white;
    display:flex;
    justify-content: center;
    align-items:center;
    font-size: 14px;
`
const Anouncement = () => {
  return (
    <Container>
        Super Summer Sale is Here!!!!!!!!
    </Container>
  )
}

export default Anouncement