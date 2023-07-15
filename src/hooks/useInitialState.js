import React from 'react';
import initialState from '../initialState';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products'


const useInitialState = () => {
    
  // const [products, setProducts] = React.useState([])

  // React.useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await axios(API);
  //       setProducts(response.data);
  //     };
  //     fetchData();
  //   }, []);

  const products = initialState.products;
  const [cart, setCart] = React.useState(initialState.cart);

  const addToCart = (payload) => {
    setCart([...cart, payload])
  }

  const removeFromCart = (payload) => {
    const filteredItems = cart.filter(product => product.id !== payload.id)
    setCart(filteredItems)
  }

  return {
      products,
      cart,
      addToCart,
      removeFromCart
  }
};

export default useInitialState;