import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export interface IAuthRouteProps {
  children?: React.ReactNode;
}
const AuthRoute: React.FC<IAuthRouteProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  //const [loading, setLoading] = useState(false);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("welcome user!");
    } else {
      console.log("unauthorized");
      navigate("/login");
    }
  });
  useEffect(() => {
    AuthCheck();
    return () => AuthCheck();
  }, [auth, AuthCheck]);
  return <>{children}</>;
};

export default AuthRoute;
