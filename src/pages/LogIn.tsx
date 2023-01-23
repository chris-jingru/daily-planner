import React from "react";
import { auth, provider } from "../firebase";

import { signInWithPopup } from "firebase/auth";

interface Props {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}
const LogIn: React.FC = () => {
  const signInWithGoogle = ({ setIsAuth }: Props) => {
    // signInWithPopup(auth, provider);
  };
  return (
    <div>
      <h1>Daily Planner</h1>
      <div className="loginPage">
        <p>Sign In With Google to Continue</p>
        <button className="login-with-google-btn">Sign in with Google</button>
      </div>
    </div>
  );
};
export default LogIn;
