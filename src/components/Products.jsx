import React from 'react'
import  styled  from 'styled-components';
import Product from './Product';
import {popularProducts} from '../data'


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
`
const Products = ({category,filters,sort}) => {
  console.log(category,filters,sort)
  return (
    <Container>
        {
          popularProducts.map((prod)=>(
            <Product prod={prod} key={prod.id} />
          ))  
        }
    </Container>
  )
}

export default Products