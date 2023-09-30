import { MouseEventHandler } from "react";
import "./style.css";

interface ButtonProps {
  text: string;
  isActive?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ isActive, text, onClick }) => {
  return (
    <button
      id={text}
      className={`base-button ${isActive ? "active-button" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
