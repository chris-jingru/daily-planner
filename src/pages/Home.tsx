import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();

  return (
    <div>
      <p>Home Page (Protected by Firebase!)</p>
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
