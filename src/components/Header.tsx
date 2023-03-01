//import React, { useState } from "react";
import AddItem from "./AddItem";
const Header = () => {
  let date = new Date();
  let today = date.toLocaleDateString();
  // const [isShow, setIsShow] = useState(false);
  // const tryClick = () => {
  //   setIsShow(true);
  //};
  return (
    <>
      <AddItem />
      {/* <div onClick={tryClick}>{isShow ? <input></input> : "+"}</div> */}
      <h1>Daily Planner 1</h1>
      <div>Date:{today}</div>
    </>
  );
};

export default Header;
