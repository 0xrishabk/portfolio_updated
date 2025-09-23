import type { ReactNode } from "react";
import './Button.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  type?: "button" | "submit" | "reset";
};

function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variant} baseStyle`}
    >
      {children}
    </button> 
  )
}

export default Button;