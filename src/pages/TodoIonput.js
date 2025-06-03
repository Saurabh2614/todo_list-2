import React, { useState } from "react";

export default function TodoIonput(props) {
  const [inputtext, setInputtext] = useState("");
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputtext);
      setInputtext("");
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputtext}
        onChange={(e) => {
          setInputtext(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputtext);
          setInputtext("");
        }}
      >
        +
      </button>
      <br />
    </div>
  );
}
