import { TextInput } from "./components/UI/TextInput";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useTodoList } from "./hooks/useTodoList";
import { TodoContainer } from "./components/TodoContainer";
import "./App.css";

function App() {
  const {
    currentTodoList,
    leftItemsCount,
    statusLabel,
    addTodoItem,
    handleTodoItem,
    removeTodoItem,
    editTodoItem,
    clearCompletedTasks,
    handleTodoLabels,
  } = useTodoList();

  return (
    <div className="todo-wrapper">
      <Header />
      <TextInput onSubmit={addTodoItem} placeholder="What needs to be done?" />
      <hr className="wrap-line" />
      <div className="todo-container">
        <TodoContainer
          currentTodoList={currentTodoList}
          handleTodoItem={handleTodoItem}
          removeTodoItem={removeTodoItem}
          editTodoItem={editTodoItem}
        />
      </div>
      <hr className="wrap-line" />
      <Footer
        leftItemsCount={leftItemsCount}
        statusLabel={statusLabel}
        clearCompletedTasks={clearCompletedTasks}
        handleTodoLabels={handleTodoLabels}
      />
    </div>
  );
}

export default App;
