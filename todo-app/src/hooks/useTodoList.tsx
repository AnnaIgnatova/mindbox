import { MouseEventHandler, useEffect, useState } from "react";
import { TodoList } from "../types/todoList";

export const useTodoList = (initialState: TodoList[]) => {
  const [fullTodoList, setFullTodoList] = useState<TodoList[]>(initialState);
  const [currentTodoList, setCurrentTodoList] = useState<TodoList[]>([]);
  const [statusLabel, setStatusLabel] = useState<string>("All");
  const leftItemsCount = fullTodoList.filter((item) => !item.checked).length;

  useEffect(() => {
    getTodoListByLabel(statusLabel);
  }, [statusLabel, fullTodoList]);

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

  const handleTodoLabels: MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement;
    setStatusLabel(target.id);
  };

  const clearCompletedTasks = () => {
    const filteredList = fullTodoList.filter((task) => !task.checked);
    setFullTodoList([...filteredList]);
  };

  return {
    currentTodoList,
    leftItemsCount,
    statusLabel,
    handleTodoItem,
    addTodoItem,
    handleTodoLabels,
    clearCompletedTasks,
  };
};
