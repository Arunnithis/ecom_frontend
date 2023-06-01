import Home from './pages/Home';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
          <Route  exact path="/" element={<Home />} />
          <Route path="/register" element={
              user ? <Navigate to="/" /> : <Register />
            } />
          <Route path="/login" element=
            {
              user ? <Navigate to="/" /> : <Login />
            }
           />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products/:category" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
