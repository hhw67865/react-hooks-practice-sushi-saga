import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, setCash,cash}) {
   
 
 const [counter, setCounter] = useState(0)
 
  const sushiComponents = sushis.map((sushi)=>{
    return (
      <Sushi key={sushi.id} counter={counter}  sushi={sushi} setCash={setCash} cash={cash} />
    )
  }
  )

      function handleMoreSushi () {
        
        if (counter+4===100){
          setCounter(0)
        }
        else {
        setCounter(prev=>prev+4)
        }
        console.log(counter)
      }   
 

  return (
    <div className="belt">
      {sushiComponents}
      
      <MoreButton
       handleMoreSushi={handleMoreSushi}
        />
    </div>
  );
}

export default SushiContainer;
