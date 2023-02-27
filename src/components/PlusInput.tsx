interface Props {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  closeInput: () => void;
}

const PlusInput = ({ isShown, setIsShown, closeInput }: Props) => {
  const goBack = () => {
    setIsShown(false);
    closeInput();
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
          <option value="top-priorities">Top Priorities</option>
          <option value="reminders">Reminders</option>
          <option value="to-do">To Do</option>
          <option value="notes">Notes</option>
        </select>

        <button>Add</button>
      </form>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default PlusInput;

//! Deprecated codes
// const whatYouWant = useRef<HTMLInputElement | null>();

// const { inputRef } = React.useContext(InputContext);
