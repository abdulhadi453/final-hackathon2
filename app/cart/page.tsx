"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../../Components/Button";
import Link from "next/link";

interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [deliveryCharges, setDeliveryCharges] = useState(0);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const cart = JSON.parse(storedCart) as CartItem[];
      setCartItems(cart);
      calculateSummary(cart);
    }
    setIsLoading(false); // Cart data is loaded
  }, []);

  const updateCartInLocalStorage = (updatedCart: CartItem[]) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateSummary(updatedCart);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
    } else {
      const updatedCart = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      updateCartInLocalStorage(updatedCart);
    }
  };

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCartInLocalStorage(updatedCart);
  };

  const calculateSummary = (cart: CartItem[]) => {
    const newSubtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const newDeliveryCharges = +(newSubtotal * 0.05).toFixed(2);
    const newTotal = +(newSubtotal + newDeliveryCharges).toFixed(2);

    setSubtotal(newSubtotal);
    setDeliveryCharges(newDeliveryCharges);
    setTotal(newTotal);
  };

  if (isLoading) {
    // Show a loader while the cart data is being loaded
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Conditionally render the heading */}
      {cartItems.length > 0 && <h1 className="text-3xl mb-4">Your Cart</h1>}
      
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-6">
        {/* Cart Items Section */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full h-[60vh]">
            <p className="text-5xl mb-4">Your cart is empty</p>
            <Link href="/allproducts">
              <Button className="bg-black text-white py-3 px-8 rounded-full text-lg">
                Add items
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex-grow w-full">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex bg-gray-100 justify-between items-center h-auto w-4/5 mb-6 rounded-lg p-2"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="rounded"
                />
                <div className="flex flex-col h-auto w-3/5 p-4">
                  <h2 className="mb-2 text-xl font-medium">{item.title}</h2>
                  <p className="mb-2 text-lg text-gray-400">
                    {item.description}
                  </p>
                  <p className="mb-2 text-lg text-gray-400">₹{item.price}.00</p>
                  <p className="mb-4 text-lg text-gray-400">
                    Quantity: {item.quantity}
                  </p>
                  <div className="flex items-center space-x-4">
                    <Button
                      className="w-10 h-10 text-lg bg-red-600 text-white rounded"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <Button
                      className="w-10 h-10 text-lg bg-gray-900 text-white rounded"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                    <Button
                      className="bg-gray-700 text-white py-2 px-4 rounded"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Order Summary Section */}
        {cartItems.length > 0 && (
          <div className="flex-shrink-0 w-full lg:w-2/5 bg-white p-4 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Order Summary</h2>
            <div className="text-lg">
              <div className="flex justify-between mb-1">
                <span>Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Delivery (5%):</span>
                <span>₹{deliveryCharges.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-xl mb-6">
                <span>Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
            <Link href="/checkout">
              <Button className="w-full bg-black text-xl rounded-full text-white py-5">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
