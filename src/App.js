import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import ReactMemoExample from "./components/ReactMemoAndCallBack"
function App() {
  const [randomNumber, setRandomNumber] = useState(Math.random());
  const [counter,setCounter] = useState(0)

  const handleChange =useCallback(() => {
    setCounter(counter + 1);
  },[counter]);

  useEffect(() => {
    setInterval(()=>{
      setRandomNumber(Math.random().toFixed(2)) //1 -> 3 -?4 
    },2000)
  },[]);
  
  return (
    <div className="App">
      <h2>random Number : {randomNumber} </h2>
     <ReactMemoExample counter ={counter} handleChange ={handleChange}/>
      
    </div>
  );
}

export default App;
