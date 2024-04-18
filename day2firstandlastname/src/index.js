import React from "react";
import ReactDOM from "react-dom";
const fname = "Sapna";
const lname = "jha";

const num = 4;

ReactDOM.render(
  <div>
    {/* <h1>Hello {fname} {lname}{" "}</h1> */}
    {/* <h1>Hello {`${fname} ${lname}`}</h1> */}
    <h1>Hello {fname + " " + lname}</h1>

    <p>your lucky number {2 + 2}</p>
    <p>your lucky number {Math.floor(Math.random() * 10)} </p>
    {/* in above code it will givw any random number*/}
  </div>,
  document.getElementById("root")
);
