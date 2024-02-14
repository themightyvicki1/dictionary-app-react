import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

//sending the meanings props from results component
export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meanings">
      <div className="meaningsContainer">
        <p className="displayPartOfSpeech">{props.meanings.partOfSpeech}</p>
        <p className="displayDefinition">
          <span>defined as:</span> {props.meanings.definitions[0].definition}
        </p>
        <p className="displayExample">
          <em>{props.meanings.definitions[0].example}</em>
        </p>
        <p>
          <Synonyms synonyms={props.meanings.synonyms} />
        </p>
      </div>
    </div>
  );
}
