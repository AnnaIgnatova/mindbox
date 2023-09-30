import { TextInput } from "./components/UI/TextInput";
import { Checkbox } from "./components/UI/Checkbox";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useTodoList } from "./hooks/useTodoList";
import "./App.css";

const defaultList = [
  { id: 0, text: "task 1", checked: true },
  { id: 1, text: "task 2", checked: false },
];

function App() {
  const {
    currentTodoList,
    statusLabel,
    leftItemsCount,
    handleTodoLabels,
    addTodoItem,
    handleTodoItem,
    clearCompletedTasks,
  } = useTodoList(defaultList);
  return (
    <div className="todo-wrapper">
      <Header />
      <TextInput addTodo={addTodoItem} />
      {currentTodoList.map((data) => (
        <Checkbox key={data.id} handleTodoItem={handleTodoItem} {...data} />
      ))}
      <hr />
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
