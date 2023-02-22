// import React, { useState } from "react";

// const AddItem: React.FC = () => {
//   const [isShown, setIsShown] = useState(false);

//   const openInput = () => {
//     console.log("hello are you there?");
//     setIsShown(true);
//   };

//   interface Props {
//     isShown: boolean;
//     setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
//   }
//   const PlusInput = ({ isShown, setIsShown }: Props) => {
//     const goBack = () => {
//       setIsShown(false);
//       alert("hello");
//     };
//     return (
//       <div>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//           }}
//         >
//           <label htmlFor="item-to-add"></label>
//           <input id="item-to-add" type="text" onChange={() => {}} />
//           <select name="formSelect" id="formSelect" required>
//             <option value="">Top Priorities</option>
//             <option value="">Reminders</option>
//             <option value="">To Do</option>
//             <option value="">Notes</option>
//           </select>

//           <button>Add</button>
//         </form>
//         <button
//           onClick={() => {
//             goBack();
//           }}
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   };
//   return (
//     <div onClick={openInput}>
//       {isShown ? <PlusInput isShown={isShown} setIsShown={setIsShown} /> : "+"}
//     </div>
//   );
// };

// export default AddItem;

import React, { useState } from "react";

// interface Props {
//   isShown: boolean;
//   setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
// }

const PlusInput = () => {
  // const goBack = () => {
  //   console.log("hello");
  // };
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
          <option value="top-priorities">Top Priorities</option>
          <option value="reminders">Reminders</option>
          <option value="to-do">To Do</option>
          <option value="notes">Notes</option>
        </select>

        <button>Add</button>
      </form>
      <button
      // onClick={() => {
      //   goBack();
      // }}
      >
        Go Back
      </button>
    </div>
  );
};

const AddItem: React.FC = () => {
  const [isShown, setIsShown] = useState(false);

  const openInput = () => {
    console.log("hello are you there?");
    setIsShown(!isShown);
  };

  return <div onClick={openInput}>{isShown ? <PlusInput /> : "+"}</div>;
};

export default AddItem;
