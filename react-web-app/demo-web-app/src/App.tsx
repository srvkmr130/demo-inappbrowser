import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Route, Routes } from "react-router";
import DemoWebApp from "./screens/DemoWebApp";
import DemoDeepLink from "./screens/DemoDeepLink";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/:value" element={<DemoWebApp />} />
          <Route path="/redirect/:redirect" element={<DemoDeepLink />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
