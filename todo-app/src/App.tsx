import { useState } from "react";
import "./App.css";
import { TextInput } from "./components/TextInput";
import { Checkbox } from "./components/Checkbox";

type TodoList = { [key: string]: { text: string; checked: boolean } };

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState<TodoList>({
    "0": { text: "task 1", checked: true },
    "1": { text: "task 2", checked: false },
  });

  const handleTodoItem = (id: string, checked: boolean) => {
    setTodoList({
      ...todoList,
      [id]: { ...todoList[id], checked },
    });
  };

  const addTodoItem = (text: string) => {
    const itemsLength = Object.keys(todoList).length;
    setTodoList({ ...todoList, [itemsLength]: { text, checked: false } });
  };
  return (
    <>
      <div className="todo-wrapper">
        <header>
          <h2>Tasks</h2>
          <div>🚀</div>
        </header>

        <TextInput addTodo={addTodoItem} value={todoValue} />
        <div>
          {Object.entries(todoList).map(([id, data]) => (
            <Checkbox
              key={id}
              id={id}
              handleTodoItem={handleTodoItem}
              {...data}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
