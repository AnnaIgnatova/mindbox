import { MouseEventHandler, ReactNode } from "react";
import "./style.css";

interface ButtonProps {
  isActive?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  isActive,
  children,
  onClick,
}) => {
  return (
    <button
      className={`base-button ${isActive ? "active-button" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
