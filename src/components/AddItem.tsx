import React, { useState } from "react";
import PlusInput from "./PlusInput";

const AddItem: React.FC = () => {
  const [isShown, setIsShown] = useState(false);

  const openInput = () => {
    console.log("hello are you there?");
    setIsShown(true);
  };

  return (
    <div onClick={openInput}>
      {isShown ? <PlusInput isShown={isShown} setIsShown={setIsShown} /> : "+"}
    </div>
  );
};

export default AddItem;
