import React, { useReducer, useState } from "react";

type TodoItem = {
  id: number;
  text: string;
  priority: string;
  completed: boolean;
};

type TodoState = {
  topPriority: TodoItem[];
  reminder: TodoItem[];
  todo: TodoItem[];
  notes: TodoItem[];
  [key: string]: TodoItem[];
};

type ActionType =
  | { type: "ADD_TODO"; payload: TodoItem }
  | { type: "EDIT_TODO"; payload: TodoItem }
  | { type: "COMPLETE_TODO"; payload: TodoItem }
  | { type: "DELETE_TODO"; payload: TodoItem };

const todoReducer = (state: TodoState, action: ActionType): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        [action.payload.priority]: [
          ...state[action.payload.priority],
          action.payload,
        ],
      };
    case "EDIT_TODO":
      return {
        ...state,
        [action.payload.priority]: state[action.payload.priority].map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case "COMPLETE_TODO":
      return {
        ...state,
        [action.payload.priority]: state[action.payload.priority].map((item) =>
          item.id === action.payload.id ? { ...item, completed: true } : item
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        [action.payload.priority]: state[action.payload.priority].filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todoText, setTodoText] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");

  const [state, dispatch] = useReducer(todoReducer, {
    topPriority: [],
    reminder: [],
    todo: [],
    notes: [],
  } as TodoState);

  const handleTodoTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const handlePriorityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPriority(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoText && selectedPriority) {
      const newTodo: TodoItem = {
        id: Date.now(),
        text: todoText,
        priority: selectedPriority,
        completed: false,
      };
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setTodoText("");
      setSelectedPriority("");
    }
  };

  const handleEditTodo = (todo: TodoItem) => {
    const newText = prompt("Enter new text:", todo.text);
    if (newText) {
      const updatedTodo: TodoItem = { ...todo, text: newText };
      dispatch({ type: "EDIT_TODO", payload: updatedTodo });
    }
  };

  const handleCompleteTodo = (todo: TodoItem) => {
    dispatch({ type: "COMPLETE_TODO", payload: todo });
  };

  const handleDeleteTodo = (todo: TodoItem) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      dispatch({ type: "DELETE_TODO", payload: todo });
    }
  };

  return (
    <div>
      <h1>TODO App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter todo"
          value={todoText}
          onChange={handleTodoTextChange}
        />
        <select value={selectedPriority} onChange={handlePriorityChange}>
          <option value="">Select Priority</option>
          <option value="topPriority">Top Priority</option>
          <option value="reminder">Reminder</option>
          <option value="todo">Todo</option>
          <option value="notes">Notes</option>
        </select>
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div>
        <h2>Top Priority</h2>
        <ul>
          {state.topPriority.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              {!todo.completed && (
                <>
                  <button onClick={() => handleEditTodo(todo)}>Edit</button>
                  <button onClick={() => handleCompleteTodo(todo)}>
                    Complete
                  </button>
                </>
              )}
              <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Reminder</h2>
        <ul>
          {state.reminder.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              {!todo.completed && (
                <>
                  <button onClick={() => handleEditTodo(todo)}>Edit</button>
                  <button onClick={() => handleCompleteTodo(todo)}>
                    Complete
                  </button>
                </>
              )}
              <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Todo</h2>
        <ul>
          {state.todo.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              {!todo.completed && (
                <>
                  <button onClick={() => handleEditTodo(todo)}>Edit</button>
                  <button onClick={() => handleCompleteTodo(todo)}>
                    Complete
                  </button>
                </>
              )}
              <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Notes</h2>
        <ul>
          {state.notes.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              {!todo.completed && (
                <>
                  <button onClick={() => handleEditTodo(todo)}>Edit</button>
                  <button onClick={() => handleCompleteTodo(todo)}>
                    Complete
                  </button>
                </>
              )}
              <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoApp;
