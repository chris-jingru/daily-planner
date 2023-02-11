import React from "react";

interface Props {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}
const PlusInput = ({ isShown, setIsShown }: Props) => {
  const goBack = () => {
    setIsShown(false);
  };
  return (
    <div>
      <form action="">
        <label htmlFor="item-to-add"></label>
        <input id="item-to-add" type="text" />
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
