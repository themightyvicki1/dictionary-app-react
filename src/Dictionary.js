import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <form>
        <span className="inputSpan">
          <input
            type="search"
            placeholder="Enter a word..."
            autoFocus={true}
            className="inputSearch"
          />
        </span>
        <span>
          <input type="submit" value="Search" className="inputButton" />
        </span>
      </form>
    </div>
  );
}
