import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Layout/Home";
import Layout from "./components/Layout/Layout";
import Login from "./components/Layout/Login";
import MindLink from "./components/Layout/MindLink";
import Signup from "./components/Layout/Signup";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/mindlink"
            element={<MindLink />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
