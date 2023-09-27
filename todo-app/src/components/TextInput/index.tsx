import { useState } from "react";
import "./style.css";

interface TextInputProps {
  value: string;
  addTodo: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ addTodo }) => {
  const [value, setValue] = useState("");
  return (
    <input
      className="text-input"
      type="text"
      value={value}
      placeholder="What needs to be done?"
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          addTodo(value);
          setValue("");
        }
      }}
    />
  );
};
