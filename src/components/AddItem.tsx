import React, { useState } from "react";
import PlusInput from "./PlusInput";

const AddItem: React.FC = () => {
  const [isShown, setIsShown] = useState(false);

  const openInput = () => {
    console.log("hello are you there?");
    setIsShown(true);
  };

  const PlusInput = () => {
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

  return <div onClick={openInput}>{isShown ? "←" : "+"}</div>;
};

export default AddItem;
