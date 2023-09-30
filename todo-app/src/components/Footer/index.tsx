import { MouseEventHandler } from "react";
import { Button } from "../UI/Button";
import "./style.css";
import { TextBlock } from "../UI/TextBlock";

interface FooterProps {
  leftItemsCount: number;
  statusLabel: string;
  handleTodoLabels: MouseEventHandler<HTMLButtonElement>;
  clearCompletedTasks: MouseEventHandler<HTMLButtonElement>;
}

const LIST_LABELS = ["All", "Active", "Completed"];

export const Footer: React.FC<FooterProps> = ({
  leftItemsCount,
  statusLabel,
  clearCompletedTasks,
  handleTodoLabels,
}) => {
  return (
    <div className="footer">
      <TextBlock>{leftItemsCount} items left</TextBlock>
      <div>
        {LIST_LABELS.map((label) => (
          <Button
            key={label}
            text={label}
            isActive={label === statusLabel}
            onClick={handleTodoLabels}
          />
        ))}
      </div>
      <Button text="Clear Completed" onClick={clearCompletedTasks} />
    </div>
  );
};
