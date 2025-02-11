import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva("px-4 py-2 rounded focus:outline-none", {
  variants: {
    variant: {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-500 text-black hover:bg-gray-600",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    disabled: {
      true: "bg-gray-300 text-gray-600 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  className,
  children,
  ...props
}) => {
  const mergedClassNames = twMerge(buttonStyles({ variant, size, disabled: disabled ? true : undefined }), className);

  return (
    <button {...props} className={mergedClassNames} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
