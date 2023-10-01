import { useState } from "react";
import "./style.css";

interface CheckboxProps {
  id: number;
  text: string;
  checked: boolean;
  handleTodoItem: (id: number, checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  text,
  checked,
  handleTodoItem,
}) => {
  const [value, setValue] = useState(checked);

  const handleCheckbox = () => {
    const checked = !value;
    setValue(checked);
    handleTodoItem(id, checked);
  };

  return (
    <div className={`checkbox-container ${checked ? " checked" : ""}`}>
      <label>
        <input
          data-testid="checkbox-item"
          type="checkbox"
          className="checkbox"
          checked={value}
          onChange={handleCheckbox}
        />
        <span data-testid="checkbox-label-item">{text}</span>
      </label>
    </div>
  );
};
