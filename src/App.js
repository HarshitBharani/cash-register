import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  var [bill, setBill] = useState("");
  var [cashGiven, setCashGiven] = useState("");
  var renderElement = document.querySelector("#render");
  var newv = document.createElement("li");
  var outputArray = [
    {
      note: 2000,
      no: 0
    },
    {
      note: 500,
      no: 0
    },
    { note: 200, no: 0 },
    {
      note: 100,
      no: 0
    },
    { note: 50, no: 0 },
    {
      note: 20,
      no: 0
    },
    { note: 10, no: 0 },
    {
      note: 5,
      no: 0
    },
    {
      note: 1,
      no: 0
    }
  ];
  var listitem = outputArray.map((noteobj) => {
    return (
      <li>
        {" "}
        {noteobj.note} : {noteobj.no}
      </li>
    );
  });
  function billChangeHandler(event) {
    var billChange = event.target.value;
    setBill(billChange);
  }
  function cashChangeHandler(event) {
    var tempAmount = event.target.value;
    setCashGiven(tempAmount);
  }
  function onClickhandler() {
    var returnAmount = cashGiven - bill;

    for (var i = 0; i < outputArray.length; i++) {
      if (returnAmount > outputArray[i].note) {
        outputArray[i].no = Math.floor(returnAmount / outputArray[i].note);
        returnAmount = returnAmount % outputArray[i].note;
      }
      var newv = document.createElement("li");
      newv.innerHTML = "hi";
    }
  }
  return (
    <div className="App">
      <input
        className="input-text"
        type="number"
        placeholder="pls enter your bill amount"
        onChange={() => billChangeHandler(event)}
      ></input>
      <input
        className="input-text"
        type="number"
        placeholder="pls enter the cash given"
        onChange={() => cashChangeHandler(event)}
      ></input>
      <button className="btn" onClick={() => onClickhandler()}>
        calculate
      </button>
      <ul>{listitem}</ul>
    </div>
  );
}
