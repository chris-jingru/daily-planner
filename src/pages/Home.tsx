import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Input from "../components/Input";
import Header from "../components/Header";
export interface IHomeProps {}
const Home: React.FC<IHomeProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [tp, setTp] = useState<String>("");
  // const [reminder, setReminder] = useState<String>("");
  // const [td, setTd] = useState<String>("");
  // const [note, setNote] = useState<String>("");

  return (
    <div>
      <Header />
      <Input tp={tp as string} setTp={setTp} />
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
