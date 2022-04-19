import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/logInPage/LogIn";
import MainPage from "./pages/mainPage/MainPage";
import { MyContext } from "./global";

function App() {
  const [userInfo, setUserInfo] = useState("");
  const [reload, setReload] = useState("a");
  return (
    <div className="App">
      <MyContext.Provider value={{ userInfo, setUserInfo, reload, setReload }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<LogIn />} />
            <Route exact path="/mainPage" element={<MainPage />} />
          </Routes>
        </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
