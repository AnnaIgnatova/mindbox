import { MouseEventHandler } from "react";
import { Button } from "../UI/Button";
import { TextBlock } from "../UI/TextBlock";

import "./style.css";

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
      <div>
        <TextBlock>{leftItemsCount} items left</TextBlock>
      </div>
      <div>
        {LIST_LABELS.map((label) => (
          <Button
            key={label}
            isActive={label === statusLabel}
            onClick={handleTodoLabels}
          >
            {label}
          </Button>
        ))}
      </div>
      <div>
        <Button onClick={clearCompletedTasks}>Clear Completed</Button>
      </div>
    </div>
  );
};
