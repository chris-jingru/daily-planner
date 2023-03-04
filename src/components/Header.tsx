import React, { useState } from "react";
// import AddItem from "./AddItem";
import NewInput from "./NewInput";
const Header = () => {
  let date = new Date();
  let today = date.toLocaleDateString();
  const [isShown, setIsShown] = useState(false);
  const showHandler = () => {
    setIsShown(true);
  };

  const hideHandler = () => {
    setIsShown(false);
  };
  return (
    <>
      {/* <AddItem /> */}

      <h1>Daily Planner 1</h1>
      <div>Date:{today}</div>
      <button onClick={showHandler}> {!isShown && "+"} </button>
      {isShown && <NewInput onClose={hideHandler} />}
    </>
  );
};

export default Header;
