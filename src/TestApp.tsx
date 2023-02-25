import React, { useReducer, useState } from "react";
interface Todo {
  id: number;
  userInput: string;
}

type Action =
  | { type: "add"; payload: Todo }
  | { type: "delete"; payload: Todo };

const reducer = (todos: Todo[], action: Action) => {
  switch (action.type) {
    case "add":
      return [...todos, action.payload];
    case "delete":
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

//export interface IAppProps {}
export const TestApp: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [todos, dispatch] = useReducer<React.Reducer<Todo[], Action>>(
    reducer,
    []
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "add",
      payload: { userInput: userInput, id: Date.now() },
    });
    setUserInput("");
  };

  const handleDelete = (todo: Todo) => {
    dispatch({
      type: "delete",
      payload: { userInput: userInput, id: todo.id },
    });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleChange} />

        <button type="submit">Add</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.userInput}
          <button
            onClick={() => {
              handleDelete(todo);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};
