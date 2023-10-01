import { useState } from "react";

import { Button } from "../../UI/Button";
import { EditIcon } from "../../../assets/icons/EditIcon";
import { DeleteIcon } from "../../../assets/icons/DeleteIcon";
import { Checkbox } from "../../UI/Checkbox";
import { TodoItem } from "../../../types/todoList";
import { TextInput } from "../../UI/TextInput";
import "./style.css";

interface TodoListItemProps {
  data: TodoItem;
  handleTodoItem: (id: number, checked: boolean) => void;
  removeTodoItem: (e: React.MouseEvent) => void;
  editTodoItem: (text: string) => void;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  data,
  handleTodoItem,
  editTodoItem,
  removeTodoItem,
}) => {
  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = (text: string) => {
    handleEditMode();
    editTodoItem(text);
  };

  return (
    <div className="todo-item">
      {editMode ? (
        <TextInput
          placeholder="Please, type something"
          defaultValue={data.text}
          onSubmit={handleSubmit}
        />
      ) : (
        <>
          <Checkbox handleTodoItem={handleTodoItem} {...data} />
          <div className="buttons-container">
            <Button onClick={handleEditMode}>
              <EditIcon />
            </Button>
            <Button onClick={removeTodoItem}>
              <DeleteIcon />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
