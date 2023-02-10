import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

import Header from "../components/Header";
export interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <form action="">
        <h2>Top Priorities</h2>
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

      <button
        onClick={() => {
          signOut(auth);
          navigate("/");
        }}
      >
        Sign out of Firebase
      </button>
    </div>
  );
};

export default Home;
