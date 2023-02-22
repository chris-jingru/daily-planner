import { useState, useContext } from "react";
import InputContext from "../contexts/InputContext";

interface Props {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}
const PlusInput = ({ isShown, setIsShown }: Props) => {
  const goBack = () => {
    setIsShown(false);
    alert("hello");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="item-to-add"></label>
        <input id="item-to-add" type="text" onChange={() => {}} />
        <select name="formSelect" id="formSelect" required>
          <option value="">Top Priorities</option>
          <option value="">Reminders</option>
          <option value="">To Do</option>
          <option value="">Notes</option>
        </select>

        <button>Add</button>
      </form>
      <button
        onClick={() => {
          goBack();
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default PlusInput;

//! Deprecated codes
// const whatYouWant = useRef<HTMLInputElement | null>();

// const { inputRef } = React.useContext(InputContext);
