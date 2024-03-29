import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import DisplayDefinitionResults from "./DisplayDefinitionResults";
import Photos from "./Photos";
import "./Photos.css";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [loaded, setLoaded] = useState(false);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
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

  function handlePexelsResponse(response) {
    //console.log(response.data);
    setPhotos(response.data.photos);
  }

  /*put api in search b/c when searching we can to make the api call*/
  function search() {
    /*setting up the api with key, url, axios call */
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios.get(apiUrl).then(handleDictionary);

    //creating api for pictures
    const pexelsApiKey = `NaGQDyK82WUlaGzbKFRWYtgGDFvZNnEBEpSajlhzaJcpZrv2pIWO1dyX`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    //used to authenticate api for images
    let headers = {
      "Content-Type": "application/json",
      Authorization: pexelsApiKey,
    };
    axios.get(pexelsApiUrl, { headers }).then(handlePexelsResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      /*form with search bar and enter button*/
      <div className="Dictionary">
        <section>
          <h3>What word do you want to search for?</h3>
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
        </section>
        {/*<div className="searching">searching for...{word}</div>*/}
        {/*send definition results to new component to be displayed*/}
        {/*component name, property name, property value which is the state set above*/}
        <DisplayDefinitionResults results={results} />
        {/*every time the state changes the whole component is rerendered, rerun, with new data*/}
        {/*it reacts when a state is changed, rerendered */}
        <div className="photosContainer">
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
