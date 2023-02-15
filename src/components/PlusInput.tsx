import React, { useRef } from "react";

interface Props {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}
const PlusInput = ({ isShown, setIsShown }: Props) => {
  const goBack = () => {
    setIsShown(false);
  };
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputRef.current!.value);
        }}
      >
        <label htmlFor="item-to-add"></label>
        <input
          id="item-to-add"
          type="text"
          onChange={() => {}}
          ref={inputRef}
        />
        <select name="" id="">
          <option value="">Top Priorities</option>
          <option value="">Reminders</option>
          <option value="">To Do</option>
          <option value="">Notes</option>
        </select>

        <button>Add</button>
      </form>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default PlusInput;
