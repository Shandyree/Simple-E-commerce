import React, { useState } from 'react';
import { CartItem } from '../types';

interface TransactionPageProps {
  cart: CartItem[];
}

const TransactionPage: React.FC<TransactionPageProps> = ({ cart }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [shippingOption, setShippingOption] = useState('');
  const [isTransactionComplete, setIsTransactionComplete] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate transaction processing
    setTimeout(() => {
      setIsTransactionComplete(true);
    }, 1500);
  };

  if (isTransactionComplete) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Order Confirmation</h2>
        <p className="mb-4">Thank you for your purchase! Your order has been successfully processed.</p>
        <p className="font-semibold">Order Details:</p>
        <ul className="list-disc list-inside mb-4">
          {cart.map((item) => (
            <li key={item.product.id}>
              {item.product.name} x {item.quantity} - ${(item.product.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
        <p className="font-bold">Total: ${total.toFixed(2)}</p>
        <p className="mt-4">An email confirmation has been sent to your registered email address.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Complete Your Transaction</h2>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <ul className="mb-4">
          {cart.map((item) => (
            <li key={item.product.id} className="flex justify-between mb-2">
              <span>{item.product.name} x {item.quantity}</span>
              <span>${(item.product.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p className="font-bold text-xl mb-6">Total: ${total.toFixed(2)}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            >
              <option value="">Select a payment method</option>
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank_transfer">Bank Transfer</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Shipping Option</label>
            <select
              value={shippingOption}
              onChange={(e) => setShippingOption(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            >
              <option value="">Select a shipping option</option>
              <option value="standard">Standard Shipping</option>
              <option value="express">Express Shipping</option>
              <option value="overnight">Overnight Shipping</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransactionPage;