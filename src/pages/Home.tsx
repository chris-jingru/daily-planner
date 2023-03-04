import React, { useState, useReducer, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

//import Header from "../components/Header";

interface Todo {
  id: number;
  userInput: string;
  optionSelect: string;
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

export interface IHomeProps {}
const Home: React.FC<IHomeProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState<string>("");
  const [optionSelect, setOptionSelect] = useState<string>("");

  const [todos, dispatch] = useReducer<React.Reducer<Todo[], Action>>(
    reducer,
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionSelect(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "add",
      payload: {
        userInput: userInput,
        id: Date.now(),
        optionSelect: optionSelect,
      },
    });
    setUserInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item-to-add"></label>
        <input
          id="item-to-add"
          type="text"
          value={userInput}
          onChange={handleChange}
          required
        />
        <select
          name="formSelect"
          id="formSelect"
          required
          defaultValue=""
          onChange={handleSelect}
        >
          <option value="" disabled hidden>
            Pick One
          </option>
          <option value="top-priorities">Top Priorities</option>
          <option value="reminders">Reminders</option>
          <option value="to-do">To Do</option>
          <option value="notes">Notes</option>
        </select>

        <button type="submit">Add</button>
      </form>
      <section>
        <h2 className="underline">Top Priorities</h2>
        <div className="border-black border-2 w-1/2 h-48 bg-red-50 m-0 m-auto">
          {optionSelect === "top-priorities" && (
            <div>
              <ul>
                {todos
                  .filter((todo) => todo.optionSelect === "top-priorities")
                  .map((todo) => {
                    return (
                      <li className="text-red-500" key={todo.id}>
                        {todo.userInput}
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
        </div>
        <h2>Reminders</h2>
        <div className="border-black border-2 w-1/2 h-48 bg-red-50 m-0 m-auto">
          {optionSelect === "reminders" && (
            <div>
              <ul>
                {todos
                  .filter((todo) => todo.optionSelect === "reminders")
                  .map((todo) => {
                    return <li key={todo.id}>{todo.userInput}</li>;
                  })}
              </ul>
            </div>
          )}
        </div>
        <div>
          <h2>To Do</h2>
          <ul></ul>
        </div>
        <div>
          <h2>Notes</h2>
          <ul></ul>
        </div>
      </section>
      <button
        className="bg-red-50"
        onClick={() => {
          signOut(auth);
          navigate("/");
        }}
      >
        Sign out of Firebase
      </button>
    </div>
  );
};

export default Home;
