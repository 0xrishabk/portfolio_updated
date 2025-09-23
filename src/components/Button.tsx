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
    <div className="button-container">
      <button
        type={type}
        onClick={onClick}
        className={`${variant} baseStyle`}
      >
        {children}
      </button> 
    </div>
  )
}

export default Button;