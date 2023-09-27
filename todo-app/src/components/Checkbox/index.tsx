import { useState } from "react";
import "./style.css";

interface CheckboxProps {
  id: string;
  text: string;
  checked: boolean;
  handleTodoItem: (id: string, checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  text,
  checked,
  handleTodoItem,
}) => {
  const [value, setValue] = useState(checked);
  return (
    <div className="checkbox-container">
      <label>
        <input
          type="checkbox"
          className={`checkbox ${checked ? " checked" : ""}`}
          checked={value}
          onChange={() => {
            const checked = !value;
            setValue(checked);
            handleTodoItem(id, checked);
          }}
        />
        <span>{text}</span>
      </label>
    </div>
  );
};
