import React from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import Button from "./Button"; // Adjust the path to your Button component

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  image,
  selectedSize,
  selectedColor,
  quantity,
  onRemove,
  onUpdateQuantity,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center">
      <div className="relative w-24 h-24 mr-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          layout="fill"
          className="object-cover rounded"
        />
      </div>
      <div className="flex-grow">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">
          Size: {selectedSize}, Color: {selectedColor}
        </p>
        <p className="font-bold">${price}</p>
        <div className="flex items-center mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onUpdateQuantity(id, quantity - 1)}
          >
            -
          </Button>
          <span className="mx-2">{quantity}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onUpdateQuantity(id, quantity + 1)}
          >
            +
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="ml-4 text-red-500"
            onClick={() => onRemove(id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
