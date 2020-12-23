import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [joke, setJoke]= useState("loading :)");
  const newJoke = () => {
    fetch("https://api.icndb.com/jokes/random?firstName=Santa&lastName=Chacha")
    .then(res=>res.json())
    .then(res2=>{
      console.log(res2)
      setJoke(res2.value.joke)
    })
  }
  useEffect(()=> {
    newJoke();
  }, []);
  return (
    <div className="App">
      <button onClick={()=>newJoke()}> Get Another Joke! </button>
      <h4>{joke}</h4>
    </div>
  );
}

export default App;
