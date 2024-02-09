import React from "react";

export default function DisplayDefinitionResults(props) {
  if (props.results) {
    return <div className="DisplayDefinitionResults">{props.results.word}</div>;
  }
}
