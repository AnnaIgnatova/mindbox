import "./style.css";

interface CheckboxProps {
  text: string;
  checked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ text, checked }) => {
  return (
    <div className="checkbox-container">
      <label>
        <input
          type="checkbox"
          className={`checkbox ${checked ? " checked" : ""}`}
          checked={checked}
        />
        <span>{text}</span>
      </label>
    </div>
  );
};
