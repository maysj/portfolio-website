import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Heading from '../components/atoms/Heading';
import Button from '../components/atoms/Button';

function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Heading level={1} className="text-blue-700 mb-8">Your Cart</Heading>

      {cartItems.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6 mb-8">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                <div>
                  <Heading level={3} className="text-blue-700">{item.title}</Heading>
                  <p className="text-gray-500">Created on: {item.date}</p>
                </div>
                <Button
                  label="Remove"
                  onClick={() => removeFromCart(item.title)}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <Button label="Clear Cart" onClick={clearCart} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4" />
            <Button label="Proceed to Checkout" onClick={() => navigate('/checkout')} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4" />
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
