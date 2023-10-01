import { TodoItem } from "../../types/todoList";
import { TextBlock } from "../UI/TextBlock";
import { TodoListItem } from "./TodoItem";
import "./style.css";

interface TodoContainerProps {
  currentTodoList: TodoItem[];
  handleTodoItem: (id: number, checked: boolean) => void;
  removeTodoItem: (id: number) => (e: React.MouseEvent) => void;
  editTodoItem: (id: number) => (text: string) => void;
}

export const TodoContainer: React.FC<TodoContainerProps> = ({
  currentTodoList,
  handleTodoItem,
  removeTodoItem,
  editTodoItem,
}) => {
  return (
    <div className="todo-list">
      {currentTodoList.length ? (
        currentTodoList.map((data) => (
          <TodoListItem
            key={data.id}
            data={data}
            handleTodoItem={handleTodoItem}
            removeTodoItem={removeTodoItem(data.id)}
            editTodoItem={editTodoItem(data.id)}
          />
        ))
      ) : (
        <TextBlock>No data</TextBlock>
      )}
    </div>
  );
};
