import  { React , useState } from 'react';
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Anouncement from '../components/Anouncement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Products from '../components/Products';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({width : "0 20px", display :"flex" ,flexDirection : "column"})};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight : "0" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin : "10px 0" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const [filters ,setFilters] = useState({});
  const [sort ,setSort] = useState("newest");

  const handleFilter = (e)=>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]:value,
    })

  }

  return (
    <Container>
      <Anouncement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name = "color" onChange={handleFilter}>
            <Option disabled>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name = "size" onChange={handleFilter}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest" >Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category ={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList