import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [modea, setmodea] = useState("light");
  const [alert, setAlert] = useState(null);
  const alertFunc = (message, type) => {
    setAlert({
      msg: message,
      typename: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const togglemodea = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#00337C";
      alertFunc("Blue mode has been enabled", "success");
      document.title = "Textutils-dark mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      alertFunc("Light mode has been enabled", "success");
      document.title = "Textutils-light mode";
    }
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      alertFunc("Dark mode has been enabled", "success");
      document.title = "Textutils-dark mode";
      setInterval(() => {
        document.title = "Textultils is amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install Textultils now";
      }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      alertFunc("Light mode has been enabled", "success");
      document.title = "Textutils-light mode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Textutils"
          aboutText="about"
          mode={mode}
          togglemode={togglemode}
          togglemodea={togglemodea}
        />
        <Alert alert={alert} />
        <div className="container my-4">
          {/* <Routes> */}
            {/* <Route exact path="/About" element={<About />}></Route> */}
            {/* <Route */}
              {/* exact path="/" */}
              {/* element={ */}
                <Textform
                  heading="Enter the text to analyze"
                  mode={mode}
                  showalert={alertFunc}
                />
              {/* } */}
            {/* /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
