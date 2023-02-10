import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export interface ILoginPageProps {}
const LogIn: React.FC<ILoginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState<Boolean>(false);

  const signInWithGoogle = async () => {
    setAuthing(true);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };
  return (
    <div>
      <p>Login</p>
      <button
        onClick={() => {
          signInWithGoogle();
        }}
        disabled={Boolean(authing)}
      >
        Sign In With Google
      </button>
    </div>
  );
};
export default LogIn;
