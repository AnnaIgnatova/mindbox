import { useState } from "react";
import "./style.css";
import { Button } from "../Button";
import { DoneIcon } from "../../../assets/icons/DoneIcon";

interface TextInputProps {
  placeholder: string;
  defaultValue?: string;
  onSubmit: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  defaultValue,
  onSubmit,
}) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleSubmit = () => {
    if (value) {
      onSubmit(value);
      setValue("");
    }
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && value) handleSubmit();
  };

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value);

  return (
    <div className="input-container">
      <input
        autoFocus={true}
        data-testid="create-task"
        className="text-input"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleInput}
        onKeyDown={onKeyDown}
      />
      <Button onClick={handleSubmit}>
        <DoneIcon />
      </Button>
    </div>
  );
};
