import React from 'react'
import Navbar from '../components/Navbar'
import Anouncement from '../components/Anouncement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import ProductList from './ProductList';
import Product from './Product';
const Home = () => {
  return (
    <>
        <Anouncement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </>
  )
}

export default Home