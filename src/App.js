import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [dob, setDob] = useState("");
  const [luckyumber, setLuckyNumber] = useState();
  const [message, setMessage] = useState("");

  function onCheckClickHandler() {
    if (dob !== "" && luckyumber > -1) {
      const newDob = removeHimen(dob);
      const sumOfDob = doSumOfDob(newDob);
      const check = checkLucky(sumOfDob);
      if (check) {
        setMessage("Your Birthday is Lucky.");
      } else {
        setMessage("Your Birthday isn't Lucky.");
      }
    } else {
      setMessage("Please Input Valid Values");
    }
  }

  function removeHimen(dob) {
    return dob.replaceAll("-", "");
  }

  function doSumOfDob(newDob) {
    let sum = 0;
    for (let items in newDob) {
      sum += parseFloat(newDob[items]); // console.log(sumOfDob)
    }
    return sum;
  }

  function checkLucky(sumOfDob) {
    if (sumOfDob % luckyumber === 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Birthday Lucky App</h1>
      </header>
      <div className="container">
        <h2 className="container-heading">Is Your Birthday Lucky?</h2>
        {/* <img className="container-img" src="/image/image.svg" alt="prop" /> */}
        <label className="container-label" for="input-date">
          Date Of Birth :
        </label>
        <input
          id="input-date"
          className="container-input"
          type="date"
          value={dob}
          onChange={(event) => setDob(event.target.value)}
        />
        <label className="container-label" for="input-number">
          Lucky Number :
        </label>
        <input
          id="input-number"
          className="container-input"
          type="number"
          value={luckyumber}
          onChange={(event) => setLuckyNumber(event.target.value)}
        />
        <button className="container-btn" onClick={onCheckClickHandler}>
          Check
        </button>
        {message && <span className="container-msg">{message}</span>}
      </div>
      <footer className="footer">
        <div className="footer-heading">Social Links</div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/devprabhakarmaurya/">LinkedIn</a>
          <a href="https://github.com/devprabhakarmaurya">GitHub</a>
          {/* <a href="">LinkedIn</a> */}
        </div>
        <div className="footer-content">Made with ❤️ by Prabhakar Maurya</div>
      </footer>
    </div>
  );
}
