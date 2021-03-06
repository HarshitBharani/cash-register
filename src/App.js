import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  var [bill, setBill] = useState("");
  var [cashGiven, setCashGiven] = useState("");
  var [listItem, setListItem] = useState([]);
  var renderElement = document.querySelector("#render");
  var newv = document.createElement("li");
  var outputArray = [
    {
      note: 2000,
      no: 0,
      className: "offwhite"
    },
    {
      note: 500,
      no: 0,
      className: "white"
    },
    { note: 200, no: 0, className: "offwhite" },
    {
      note: 100,
      no: 0,
      className: "white"
    },
    { note: 50, no: 0, className: "offwhite" },
    {
      note: 20,
      no: 0,
      className: "white"
    },
    { note: 10, no: 0, className: "offwhite" },
    {
      note: 5,
      no: 0,
      className: "white"
    },
    {
      note: 1,
      no: 0,
      className: "offwhite"
    }
  ];

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
    }

    setListItem(
      outputArray.map((noteobj) => {
        return (
          <li className={noteobj.className}>
            {noteobj.note}: {noteobj.no}
          </li>
        );
      })
    );
  }
  return (
    <div className="App">
      <nav>
        <h1 className="nav-bar">Cash Register</h1>
      </nav>
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
      <ul>{listItem}</ul>
    </div>
  );
}
