import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import { TodoList } from "../types/todoList";
import { useStorage } from "./useStorage";

export const useTodoList = () => {
  const [value, setValue] = useStorage("todoList");
  const [fullTodoList, setFullTodoList] = useState<TodoList[]>(value);
  const [currentTodoList, setCurrentTodoList] = useState<TodoList[]>([]);
  const [statusLabel, setStatusLabel] = useState<string>("All");

  const leftItemsCount =
    fullTodoList.length ?? fullTodoList.filter((item) => !item.checked).length;

  useEffect(() => {
    getTodoListByLabel(statusLabel);
  }, [statusLabel, fullTodoList]);

  useEffect(() => {
    setValue(fullTodoList);
  }, [fullTodoList]);

  const getTodoListByLabel = useCallback(
    (label: string) => {
      switch (label) {
        case "All": {
          setCurrentTodoList([...fullTodoList]);
          break;
        }
        case "Active": {
          console.log("here");
          const filteredList = fullTodoList.filter((item) => !item.checked);
          console.log(filteredList);
          setCurrentTodoList([...filteredList]);
          break;
        }
        case "Completed": {
          const filteredList = fullTodoList.filter((item) => item.checked);
          setCurrentTodoList([...filteredList]);
          break;
        }
      }
    },
    [fullTodoList]
  );

  const handleTodoItem = useCallback(
    (id: number, checked: boolean) => {
      const newList = fullTodoList.map((item) =>
        item.id === id ? { ...item, checked } : item
      );
      setFullTodoList(newList);
    },
    [fullTodoList]
  );

  const addTodoItem = useCallback(
    (text: string) => {
      const lastItem = Object.entries(fullTodoList).pop();
      setFullTodoList([
        ...fullTodoList,
        { id: lastItem ? lastItem[1].id + 1 : 0, text, checked: false },
      ]);
    },
    [fullTodoList]
  );

  const handleTodoLabels: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      const target = e.target as HTMLButtonElement;
      setStatusLabel(target.textContent || "");
    },
    []
  );

  const clearCompletedTasks = useCallback(() => {
    const filteredList = fullTodoList.filter((task) => !task.checked);
    setFullTodoList([...filteredList]);
  }, [fullTodoList]);

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
