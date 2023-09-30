import { MouseEventHandler } from "react";
import { Button } from "../UI/Button";

interface FooterProps {
  statusLabel: string;
  handleTodoLabels: MouseEventHandler<HTMLButtonElement>;
}

const LIST_LABELS = ["All", "Active", "Completed"];

export const Footer: React.FC<FooterProps> = ({
  statusLabel,
  handleTodoLabels,
}) => {
  return (
    <div>
      <span>2 items left</span>
      <div>
        {LIST_LABELS.map((label) => (
          <Button
            text={label}
            isActive={label === statusLabel}
            onClick={handleTodoLabels}
          />
        ))}
      </div>
      <div>
        <Button text="Clear Completed" onClick={() => {}} />
      </div>
    </div>
  );
};
