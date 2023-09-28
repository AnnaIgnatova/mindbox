import { MouseEventHandler, useEffect, useState } from "react";
import "./App.css";
import { TextInput } from "./components/TextInput";
import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";

interface TodoList {
  id: number;
  text: string;
  checked: boolean;
}

const LIST_LABELS = ["All", "Active", "Completed"];

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [currentTodoList, setCurrentTodoList] = useState<TodoList[]>([]);
  const [fullTodoList, setFullTodoList] = useState<TodoList[]>([
    { id: 0, text: "task 1", checked: true },
    { id: 1, text: "task 2", checked: false },
  ]);
  const [statusLabel, setStatusLabel] = useState<string>("All");

  useEffect(() => {
    getTodoListByLabel(statusLabel);
  }, [statusLabel]);

  const handleTodoLabels: MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement;
    setStatusLabel(target.id);
  };

  const getTodoListByLabel = (label: string) => {
    switch (label) {
      case "All": {
        setCurrentTodoList([...fullTodoList]);
        break;
      }
      case "Active": {
        const filterdList = fullTodoList.filter((item) => !item.checked);
        setCurrentTodoList([...filterdList]);
        break;
      }
      case "Completed": {
        const filterdList = fullTodoList.filter((item) => item.checked);
        setCurrentTodoList([...filterdList]);
        break;
      }
    }
  };

  const handleTodoItem = (id: number, checked: boolean) => {
    const newList = fullTodoList.map((item) =>
      item.id === id ? { ...item, checked } : item
    );
    setFullTodoList(newList);
  };

  const addTodoItem = (text: string) => {
    setFullTodoList([
      ...fullTodoList,
      { id: fullTodoList.length, text, checked: false },
    ]);
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
          {currentTodoList.map((data) => (
            <Checkbox key={data.id} handleTodoItem={handleTodoItem} {...data} />
          ))}
        </div>
        <hr />
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
            <button>Clear Completed</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
