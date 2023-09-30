import { useState } from "react";
import "./style.css";

interface TextInputProps {
  placeholder: string;
  addTodo: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  addTodo,
  placeholder,
}) => {
  const [value, setValue] = useState("");

  const submitInput: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && value) {
      addTodo(value);
      setValue("");
    }
  };

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);

  return (
    <input
      className="text-input"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleInput}
      onKeyDown={submitInput}
    />
  );
};
