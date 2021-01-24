import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InputComponent from "./inputComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InputComponent></InputComponent>
      </header>
    </div>
  );
}

export default App;
