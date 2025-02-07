"use client";

import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

interface CartItem extends Product {
  quantity: number;
}

const AddToCart: React.FC<{ product: Product }> = ({ product }) => {
  // Cart state should hold an array of CartItems
  const [, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleAddToCart = () => {
    const storedCart = localStorage.getItem("cart");
    const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to the cart!`);
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleAddToCart}
        className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded-full text-lg"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
