import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
}) => {
  const baseStyles = "rounded px-4 py-2 focus:outline-none focus:ring";
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-400",
    outline: "border border-blue-500 text-white hover:bg-gray-400",
    ghost: "text-white hover:bg-gray-400",
  };
  const sizeStyles = {
    sm: "text-sm py-1 px-2",
    md: "text-base py-2 px-4",
    lg: "text-lg py-3 px-6",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
    >
      {children}
    </button>
  );
};

export default Button;
