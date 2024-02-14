import React from "react";
import "./DisplayDefinitionResults.css";
import Meanings from "./Meanings";

export default function DisplayDefinitionResults(props) {
  if (props.results) {
    //console.log(props.results);
    return (
      <div className="DisplayDefinitionResults">
        <section className="topSection">
          <div className="wordDisplayed">
            Searching for: <strong>{props.results[0].word}</strong>
          </div>
          <div className="phoneticDisplayed">{props.results[0].phonetic}</div>
        </section>
        <section>
          {props.results[0].meanings.map(function (meanings, index) {
            return (
              <div className="holdingMeanings" key={index}>
                <Meanings meanings={meanings} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
