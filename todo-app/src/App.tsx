import { TextInput } from "./components/UI/TextInput";
import { Checkbox } from "./components/UI/Checkbox";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useTodoList } from "./hooks/useTodoList";
import "./App.css";
import { useEffect } from "react";

function App() {
  const {
    currentTodoList,
    statusLabel,
    leftItemsCount,
    handleTodoLabels,
    addTodoItem,
    handleTodoItem,
    clearCompletedTasks,
  } = useTodoList();

  useEffect(() => {
    console.log(currentTodoList);
  }, [currentTodoList]);

  return (
    <div className="todo-wrapper">
      <Header />
      <TextInput addTodo={addTodoItem} placeholder="What needs to be done?" />
      {currentTodoList.map((data) => (
        <Checkbox key={data.id} handleTodoItem={handleTodoItem} {...data} />
      ))}
      <hr className="wrap-line" />
      <Footer
        leftItemsCount={leftItemsCount}
        statusLabel={statusLabel}
        handleTodoLabels={handleTodoLabels}
        clearCompletedTasks={clearCompletedTasks}
      />
    </div>
  );
}

export default App;
