import { useEffect } from "react";

import { TextInput } from "./components/UI/TextInput";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useTodoList } from "./hooks/useTodoList";
import { TodoContainer } from "./components/TodoContainer";
import "./App.css";

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
      <hr className="wrap-line" />
      <TodoContainer
        currentTodoList={currentTodoList}
        handleTodoItem={handleTodoItem}
      />
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
