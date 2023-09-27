import { useState } from "react";
import "./App.css";
import { TextInput } from "./components/TextInput";
import { Checkbox } from "./components/Checkbox";

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([
    { text: "task 1", checked: true },
    { text: "task 2", checked: false },
  ]);
  return (
    <>
      <div className="todo-wrapper">
        <h2>Tasks</h2>
        <TextInput />
        <div>
          {todoList.map(({ text, checked }) => (
            <Checkbox text={text} checked={checked} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
