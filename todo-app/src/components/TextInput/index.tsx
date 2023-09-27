import { useState } from "react";

interface TextInputProps {
  value: string;
  addTodo: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ addTodo }) => {
  const [value, setValue] = useState("");
  return (
    <input
      type="text"
      value={value}
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
