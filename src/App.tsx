import React from "react";
import "./App.css";
import { useState } from "react";
import LogIn from "./pages/LogIn";

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  return (
    <div className="App">
      <LogIn setIsAuth={setIsAuth} />
    </div>
  );
};

export default App;
