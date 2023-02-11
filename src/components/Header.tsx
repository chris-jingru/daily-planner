import AddItem from "./AddItem";
const Header = () => {
  let date = new Date();
  let today = date.toLocaleDateString();
  return (
    <>
      <AddItem />
      <h1>Daily Planner 1</h1>
      <div>Date:{today}</div>
    </>
  );
};

export default Header;
