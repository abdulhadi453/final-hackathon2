"use client";

import { useState, useEffect } from "react";
import Button from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Label } from "../../Components/Label";
import { RadioGroup, RadioGroupItem } from "../../Components/Radiogroup";
import Image from "next/image";

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

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [deliveryCharges, setDeliveryCharges] = useState(0);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    postalCode: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [shippingId, setShippingId] = useState("");
  const [estimatedDeliveryTime, setEstimatedDeliveryTime] = useState("");

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const cart = JSON.parse(storedCart) as CartItem[];
      setCartItems(cart);
      calculateSummary(cart);
    }
  }, []);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const {
      firstName,
      lastName,
      address1,
      city,
      postalCode,
      email,
      phoneNumber,
      cardNumber,
      cardExpiry,
      cardCVV,
    } = formValues;

    if (
      !firstName ||
      !lastName ||
      !address1 ||
      !city ||
      !postalCode ||
      !email ||
      !phoneNumber
    ) {
      alert("Please fill all required fields.");
      return false;
    }

    if (paymentMethod === "card") {
      if (!cardNumber || !cardExpiry || !cardCVV) {
        alert("Please fill all card details.");
        return false;
      }
    }

    return true;
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      // Simulate placing the order
      const newShippingId = `SH-${Date.now()}`;
      const estimatedDelivery = new Date();
      estimatedDelivery.setDate(estimatedDelivery.getDate() + 7); // Example: 7 days delivery

      setShippingId(newShippingId);
      setEstimatedDeliveryTime(estimatedDelivery.toDateString());

      // Clear cart after order
      localStorage.removeItem("cart");
      setCartItems([]);

      // Set order placed state
      setOrderPlaced(true);
    }
  };

  return (
    <div className="container mx-auto p-2">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {/* Left Section */}
        <div className="w-2/4 p-2">
          {!orderPlaced ? (
            <>
              <h1 className="text-3xl mb-2">How would you like to get your order?</h1>
              <p className="mb-5 w-4/5 text-gray-400">
                Customs regulations for India require a copy of the recipient&apos;s KYC.
                The address on the KYC needs to match the shipping address. Learn
                more about the process.
              </p>

              <div className="space-y-6">
                <h2 className="text-2xl font-medium mb-4">Enter Name and Address</h2>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full max-w-md"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full max-w-md"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  name="address1"
                  placeholder="Address Line 1"
                  className="w-full max-w-md"
                  value={formValues.address1}
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  name="address2"
                  placeholder="Address Line 2"
                  className="w-full max-w-md"
                  value={formValues.address2}
                  onChange={handleInputChange}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formValues.city}
                    onChange={handleInputChange}
                  />
                  <Input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={formValues.postalCode}
                    onChange={handleInputChange}
                  />
                </div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full max-w-md"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
                <Input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-full max-w-md"
                  value={formValues.phoneNumber}
                  onChange={handleInputChange}
                />

                {/* Payment Section */}
                <div className="space-y-4">
                  <h2 className="text-xl font-medium">Payment Method</h2>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash">Cash on Delivery</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Debit Card</Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="space-y-4 mt-4">
                      <Input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        className="w-full max-w-md"
                        value={formValues.cardNumber}
                        onChange={handleInputChange}
                      />
                      <Input
                        type="text"
                        name="cardExpiry"
                        placeholder="MM/YY"
                        className="w-full max-w-md"
                        value={formValues.cardExpiry}
                        onChange={handleInputChange}
                      />
                      <Input
                        type="text"
                        name="cardCVV"
                        placeholder="CVV"
                        className="w-full max-w-md"
                        value={formValues.cardCVV}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}

                  <Button
                    className="w-full bg-black text-white text-xl rounded-full mt-6 py-4"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center flex-col p-10 text-center">
              <div className="text-green-500 text-3xl mb-6">✔️ Order Placed Successfully!</div>
              <p className="text-xl mb-4">Your Shipping ID: <strong>{shippingId}</strong></p>
              <p className="text-xl">Estimated Delivery: <strong>{estimatedDeliveryTime}</strong></p>
              <Button
                className="w-full bg-black text-white text-xl rounded-full mt-6 py-4"
                onClick={() => window.location.href = "/"}
              >
                Go to Homepage
              </Button>
            </div>
          )}
        </div>

        {/* Right Section - Order Summary */}
        {!orderPlaced && (
          <div className="lg:w-2/5 p-2 rounded">
            <h2 className="text-3xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-lg">Subtotal:</span>
                <span className="text-lg">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-lg">Delivery Charges (5%):</span>
                <span className="text-lg">₹{deliveryCharges.toFixed(2)}</span>
              </div>
              <div className="mt-4 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex p-4 rounded-lg items-center"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={110}
                      height={110}
                      className="rounded"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                      <p className="font-medium">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between font-bold text-xl mt-6">
                <span>Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}