import { TodoItem } from "../../types/todoList";
import { Checkbox } from "../UI/Checkbox";
import { TextBlock } from "../UI/TextBlock";
import "./style.css";

interface TodoContainerProps {
  currentTodoList: TodoItem[];
  handleTodoItem: (id: number, checked: boolean) => void;
}

export const TodoContainer: React.FC<TodoContainerProps> = ({
  currentTodoList,
  handleTodoItem,
}) => {
  return (
    <div className="todo-container">
      {currentTodoList.length ? (
        currentTodoList.map((data) => (
          <Checkbox key={data.id} handleTodoItem={handleTodoItem} {...data} />
        ))
      ) : (
        <TextBlock>No data</TextBlock>
      )}
    </div>
  );
};
