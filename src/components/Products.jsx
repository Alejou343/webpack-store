import React from 'react';
import Product from '@components/Product';
import '@styles/components/Products.styl';
import AppContext from '@context/AppContext';


const Products = () => {
  
  const context = React.useContext(AppContext);
  const { products, cart, addToCart } = context

  const handleAddToCart = (product) => {
    addToCart(product)
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
