import React from "react";

export default function DisplayDefinitionResults(props) {
  if (props.results) {
    console.log(props.results);
    return (
      <div className="DisplayDefinitionResults">
        <div className="wordDisplayed">
          Searching for: <strong>{props.results[0].word}</strong>
        </div>
        <div className="phoneticDisplayed">{props.results[0].phonetic}</div>
      </div>
    );
  } else {
    return null;
  }
}
