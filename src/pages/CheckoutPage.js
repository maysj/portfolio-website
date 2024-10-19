import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Heading from '../components/atoms/Heading';
import InputField from '../components/atoms/InputField';
import Button from '../components/atoms/Button';

function CheckoutPage() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing delay
    setTimeout(() => {
      alert('Payment successful!');
      clearCart(); // Clear the cart after successful payment
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Heading level={1} className="text-blue-700 mb-8">Checkout</Heading>

      {cartItems.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <form onSubmit={handleCheckout} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <Heading level={2} className="mb-4">Order Summary</Heading>
          <div className="space-y-4 mb-8">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <p className="text-gray-700">{item.title}</p>
                <p className="text-gray-500">{item.date}</p>
              </div>
            ))}
          </div>

          <Heading level={2} className="mb-4">Payment Details</Heading>
          <div className="mb-4">
            <InputField
              type="text"
              placeholder="Name on Card"
              name="name"
              value={paymentDetails.name}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <InputField
              type="text"
              placeholder="Card Number"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div className="mb-4 flex space-x-4">
            <InputField
              type="text"
              placeholder="Expiry Date (MM/YY)"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handleInputChange}
              className="w-full"
            />
            <InputField
              type="text"
              placeholder="CVV"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <Button
            label={isProcessing ? 'Processing...' : 'Pay Now'}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white w-full py-3 mt-4"
            disabled={isProcessing}
          />
        </form>
      )}
    </div>
  );
}

export default CheckoutPage;
