import React from 'react'
import Navbar from '../components/Navbar'
import Anouncement from '../components/Anouncement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { styled } from 'styled-components';

const Container = styled.div``

const Product = () => {
  return (
    <Container>
        <Anouncement />
        <Navbar />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product
