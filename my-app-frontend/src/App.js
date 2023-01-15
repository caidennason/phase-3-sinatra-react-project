import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

function hello(){
  console.log('hi')
}


function App() {
  return (
    <h1 onClick={hello}> Hello </h1>
  );
}

export default App;
