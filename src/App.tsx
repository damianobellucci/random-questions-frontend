import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InputComponent from "./inputComponent";
import Form from "./Form";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {false && <InputComponent></InputComponent>}
        <Form></Form>
      </header>
    </div>
  );
}

export default App;
