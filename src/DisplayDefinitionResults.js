import React from "react";
import "./DisplayDefinitionResults.css";

export default function DisplayDefinitionResults(props) {
  if (props.results) {
    console.log(props.results);
    return (
      <div className="DisplayDefinitionResults">
        <section>
          <div className="wordDisplayed">
            Searching for: <strong>{props.results[0].word}</strong>
          </div>
          <div className="phoneticDisplayed">{props.results[0].phonetic}</div>
        </section>
        <section>
          {props.results[0].meanings[0].definitions[0].definition}
          <br />
          {props.results[0].meanings[0].definitions[1].definition}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
