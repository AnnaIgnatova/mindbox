import { MouseEventHandler, useEffect, useState } from "react";
import "./App.css";
import { TextInput } from "./components/UI/TextInput";
import { Checkbox } from "./components/UI/Checkbox";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

interface TodoList {
  id: number;
  text: string;
  checked: boolean;
}

function App() {
  const [currentTodoList, setCurrentTodoList] = useState<TodoList[]>([]);
  const [fullTodoList, setFullTodoList] = useState<TodoList[]>([
    { id: 0, text: "task 1", checked: true },
    { id: 1, text: "task 2", checked: false },
  ]);
  const [statusLabel, setStatusLabel] = useState<string>("All");

  useEffect(() => {
    getTodoListByLabel(statusLabel);
  }, [statusLabel, fullTodoList]);

  const handleTodoLabels: MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement;
    setStatusLabel(target.id);
  };

  const clearCompletedTasks = () => {
    const filteredList = fullTodoList.filter((task) => !task.checked);
    setFullTodoList([...filteredList]);
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
    <div className="todo-wrapper">
      <Header />
      <TextInput addTodo={addTodoItem} />
      <div>
        {currentTodoList.map((data) => (
          <Checkbox key={data.id} handleTodoItem={handleTodoItem} {...data} />
        ))}
      </div>
      <hr />
      <Footer
        statusLabel={statusLabel}
        handleTodoLabels={handleTodoLabels}
        clearCompletedTasks={clearCompletedTasks}
      />
    </div>
  );
}

export default App;
