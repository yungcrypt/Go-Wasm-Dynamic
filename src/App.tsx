import React, { Suspense, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";
import { TheHelm } from "./Helmet";
declare function addNumbers(arg0: Number, arg1: Number): Promise<Number>;
declare function divideNumbers(arg0: Number, arg1: Number): Promise<Number>;
function App() {
  const [divideLoad, setDivideLoad] = useState(false);

  const [addLoad, setAddLoad] = useState(false);
  const [theState, setTheState] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <TheHelm addLoad={addLoad} divideLoad={divideLoad} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{ width: "200px" }}>
          <button
            onClick={() => {
              setAddLoad(true);
              setTheState("add");
            }}
            style={{ width: "200px", height: "30px" }}
          >
            add
          </button>
          <button
            onClick={() => {
              setDivideLoad(true);
              setTheState("divide");
            }}
            style={{ width: "200px", height: "30px" }}
          >
            divide
          </button>
          {divideLoad && (
            <form>
              <label>
                Number:
                <input
                  type="number"
                  name="num"
                  onChange={(e) => {
                    console.log(typeof e.target.value);
                    if (
                      theState === "divide" &&
                      divideLoad &&
                      e.target.value !== ""
                    ) {
                      console.log(divideNumbers(parseInt(e.target.value), 2));
                    }

                    if (
                      theState === "add" &&
                      divideLoad &&
                      addLoad &&
                      e.target.value !== ""
                    ) {
                      console.log(addNumbers(parseInt(e.target.value), 2));
                    }
                  }}
                />
              </label>
            </form>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
