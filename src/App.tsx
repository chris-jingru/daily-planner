import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import { initializeApp } from "firebase/app";
import { config } from "./config";
import AuthRoute from "./components/AuthRoute";
import TodoApp from "./pages/HomeTest";

initializeApp(config.firebaseConfig);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <TodoApp />
            </AuthRoute>
          }
        />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
