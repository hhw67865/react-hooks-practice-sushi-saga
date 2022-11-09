import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import SushiForm from "./SushiForm"

const API = "http://localhost:3001/sushis";

function App() {

  const [cash,setCash] = useState(100)
  const [sushis,setSushis] = useState([])
  

  useEffect( ()=>{
    fetch("http://localhost:3001/sushis")
    .then(r=>r.json())
    .then(sushis=> setSushis(sushis))
  } ,[])


  return (
    <div className="app">
      <SushiContainer sushis={sushis} cash={cash} setCash={setCash}  />
      <Table cash={cash} />
      <SushiForm setCash={setCash}/>
    </div>
  );
}

export default App;
