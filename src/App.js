import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/logInPage/LogIn";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="/mainPage" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
