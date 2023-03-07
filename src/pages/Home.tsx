import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { FaTrashAlt, FaPenAlt } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";

//import Header from "../components/Header";

interface Todo {
  id: number;
  userInput: string;
  optionSelect?: string;
  complete?: boolean;
  // edit?: boolean;
  editTo?: string;
}

type Action =
  | { type: "add"; payload: Todo }
  | { type: "delete"; payload: Todo }
  | { type: "complete"; payload: Todo }
  | { type: "edit"; payload: Todo };

const reducer = (todos: Todo[], action: Action) => {
  switch (action.type) {
    case "add":
      return [...todos, action.payload];
    case "delete":
      return todos.filter((todo) => todo.id !== action.payload.id);
    case "complete":
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    case "edit":
      return todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, edit: !todo.complete } : todo
      );

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
  const [edit, setEdit] = useState<boolean>(false);
  const [editTo, setEditTo] = useState<string>("");
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

  const handleDelete = (todo: Todo) => {
    dispatch({
      type: "delete",
      payload: {
        userInput,
        id: todo.id,
      },
    });
  };

  const handleComplete = (todo: Todo) => {
    dispatch({
      type: "complete",
      payload: {
        userInput,
        id: todo.id,
      },
    });
  };
  const handleEdit = (e: React.FormEvent<HTMLFormElement>, todo: Todo) => {
    e.preventDefault();
    dispatch({
      type: "edit",
      payload: {
        userInput,
        id: todo.id,
      },
    });
    setEditTo("");
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
        {["top-priorities", "reminders", "to-do", "notes"].map((category) => (
          <div key={category}>
            <h2 className="underline">{category}</h2>
            <div className="border-black border-2 w-1/2 h-48 bg-red-50 m-0 m-auto">
              <div>
                {todos
                  .filter((todo) => todo.optionSelect === category)
                  .map((todo) => (
                    <div
                      key={todo.id}
                      className={`text-black flex justify-around p-2 bg-gray-500 ${
                        todo.complete ? "line-through" : ""
                      }`}
                    >
                      <form onSubmit={(e) => handleEdit(e, todo)}>
                        {edit ? (
                          <input
                            value={editTo}
                            onChange={(e) => setEditTo(e.target.value)}
                          />
                        ) : (
                          todo.userInput
                        )}
                      </form>
                      <div className="w-1/4 flex justify-between hover:cursor-pointer">
                        <button
                          onClick={() => {
                            if (!edit && !todo.complete) {
                              setEdit(!edit);
                            }
                          }}
                        >
                          <FaPenAlt />
                        </button>
                        <button onClick={() => handleComplete(todo)}>
                          <MdOutlineDownloadDone />
                        </button>
                        <button onClick={() => handleDelete(todo)}>
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
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
