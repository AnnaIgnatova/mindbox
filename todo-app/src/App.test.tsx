import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("create task input", () => {
  test("create task input change", async () => {
    render(<App />);
    const textInput = screen.getByTestId("create-task") as HTMLInputElement;
    fireEvent.change(textInput, { target: { value: "some new task" } });
    expect(textInput.value).toEqual("some new task");
  });

  test("create task", async () => {
    render(<App />);
    const textInput = screen.getByTestId("create-task");
    fireEvent.change(textInput, {
      target: { value: "task 1 by test library" },
    });
    fireEvent.keyDown(textInput, { key: "Enter", code: "Enter", charCode: 13 });
    const newTask = await screen.findByText("task 1 by test library");
    expect(newTask).toBeInTheDocument();
  });
});

describe("tasks container", () => {
  beforeAll(() => {
    const DEFAULT_LIST = [
      { id: 0, text: "task 1", checked: false },
      { id: 1, text: "task 2", checked: false },
    ];
    localStorage.clear();
    localStorage.setItem("todoList", JSON.stringify(DEFAULT_LIST));
  });

  test("tasks length after create", () => {
    render(<App />);
    const textInput = screen.getByTestId("create-task");
    fireEvent.change(textInput, {
      target: { value: "task 1 by test library" },
    });
    fireEvent.keyDown(textInput, { key: "Enter", code: "Enter", charCode: 13 });
    const taskCount = screen.getAllByTestId("checkbox-item").length;
    expect(taskCount).toEqual(3);
  });

  test("created task initial state", () => {
    render(<App />);
    const taskItem = screen.getAllByTestId(
      "checkbox-item"
    )[0] as HTMLInputElement;
    expect(taskItem.checked).toEqual(false);
  });

  test("make task checked", () => {
    render(<App />);
    const taskItem = screen.getAllByTestId(
      "checkbox-item"
    )[0] as HTMLInputElement;
    fireEvent.click(taskItem);
    expect(taskItem.checked).toEqual(true);
  });
});

describe("tasks filter", () => {
  beforeAll(() => {
    const DEFAULT_LIST = [
      { id: 0, text: "task 1", checked: false },
      { id: 1, text: "task 2", checked: false },
    ];
    localStorage.clear();
    localStorage.setItem("todoList", JSON.stringify(DEFAULT_LIST));
  });

  test("all filter button exists", () => {
    render(<App />);
    const allButton = screen.getByText("All");
    const activeButton = screen.getByText("Active");
    const completedButton = screen.getByText("Completed");
    expect(allButton).toBeInTheDocument();
    expect(activeButton).toBeInTheDocument();
    expect(completedButton).toBeInTheDocument();
  });

  test("filter button all logic", () => {
    render(<App />);
    const allButton = screen.getByText("All");
    fireEvent.click(allButton);
    const tasksLength = screen.getAllByTestId("checkbox-item").length;
    expect(tasksLength).toEqual(2);
  });

  test("filter button completed logic", () => {
    render(<App />);
    const completedButton = screen.getByText("Completed");
    const taskItem = screen.getAllByTestId(
      "checkbox-item"
    )[0] as HTMLInputElement;
    fireEvent.click(taskItem);
    fireEvent.click(completedButton);
    const tasksLength = screen.getAllByTestId("checkbox-item").length;
    expect(tasksLength).toEqual(1);
  });

  test("filter button active logic", () => {
    render(<App />);
    const activeButton = screen.getByText("Active");
    fireEvent.click(activeButton);
    const tasksLength = screen.getAllByTestId("checkbox-item").length;
    expect(tasksLength).toEqual(1);
  });

  test("tasks left count", () => {
    render(<App />);
    const leftCount = screen.getByText("1 items left");
    const taskItem = screen.getAllByTestId(
      "checkbox-item"
    )[1] as HTMLInputElement;
    fireEvent.click(taskItem);
    expect(leftCount).toHaveTextContent("0 items left");
  });

  test("clear completed", () => {
    render(<App />);
    const clearButton = screen.getByText("Clear Completed");
    const tasksItemStart = screen.getAllByTestId("checkbox-item");
    expect(tasksItemStart).toHaveLength(2);
    fireEvent.click(clearButton);
    const noDataCaption = screen.getByText("No data");
    expect(noDataCaption).toBeInTheDocument();
  });
});
