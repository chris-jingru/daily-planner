import React, { useState } from "react";
interface Props {
  tp: string;
  setTp: React.Dispatch<React.SetStateAction<String>>;
  //   reminder: string;
  //   setReminder: React.Dispatch<React.SetStateAction<String>>;
}
const Input: React.FC<Props> = ({ tp, setTp }) => {
  return (
    <div>
      <h2>Top Priorities</h2>
      <form>
        <label htmlFor="top-priorities" className="sr-only">
          Hope I am right
        </label>
        <input
          id="top-priorities"
          type="text"
          value={tp as string}
          onChange={(e) => {
            setTp(e.target.value as string);
          }}
        />
      </form>
      <form action="">
        <h2>Reminders</h2>
      </form>
      <form action="">
        <h2>To Do</h2>
      </form>
      <form action="">
        <h2>Notes</h2>
      </form>
    </div>
  );
};

export default Input;
