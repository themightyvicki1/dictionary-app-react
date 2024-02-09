import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import DisplayDefinitionResults from "./DisplayDefinitionResults";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [loaded, setLoaded] = useState(false);
  let [results, setResults] = useState(null);
  /*this function handles getting the response from the axios call*/
  function handleDictionary(response) {
    //console.log(response.data);
    setResults(response.data);
  }

  /*when user hits submit, goes to this function w/ event*/
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  /*storing/setting the value of word from here */
  function handleWordChange(event) {
    setWord(event.target.value);
  }

  /*put api in search b/c when searching we can to make the api call*/
  function search() {
    /*setting up the api with key, url, axios call */
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios.get(apiUrl).then(handleDictionary);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      /*form with search bar and enter button*/
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <span className="inputSpan">
            <input
              type="search"
              placeholder="Enter a word..."
              autoFocus={true}
              className="inputSearch"
              onChange={handleWordChange}
            />
          </span>
          <span>
            <input type="submit" value="Search" className="inputButton" />
          </span>
        </form>
        <div className="suggestions">
          suggestions: sunset, cartoon, library, orange, etc.
        </div>
        <div className="searching">searching for...{word}</div>
        {/*send definition results to new component to be displayed*/}
        {/*component name, property name, property value which is the state set above*/}
        <DisplayDefinitionResults results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
