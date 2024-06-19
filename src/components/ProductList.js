import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, toggleAvailability } from '../slices/productsSlice';

function ProductList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Available: {product.available ? 'Yes' : 'No'}</p>
            <button onClick={() => dispatch(removeProduct(product.id))}>Delete</button>
            <button onClick={() => dispatch(toggleAvailability(product.id))}>
              Toggle Availability
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
