import React from "react";
import atom from "../img/atom.png";
import "./styles.css";

function FindPage(props) {

  const inputChange = e => {
    props.handleChange(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.keyPressed();
  };

  return (
    <div className="find-wrapper">
      <div className="search-logo">
        <img src={atom} alt="Atom" />
      </div>
      <div className="search-text">Find Your Profile</div>
      <div className="search-input">
        <form onSubmit={handleSubmit}>
          <input
            id="searchInput"
            name="username"
            type="text"
            value={props.value}
            onChange={inputChange}
            spellCheck="false"
            autoComplete="off"
            onFocus={props.onFocus}
          />
        </form>
      </div>
    </div>
  );
};

export default FindPage;
