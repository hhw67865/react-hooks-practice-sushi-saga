import React, {useState} from "react";

function Sushi({sushi, setCash, cash, counter}) {
const [order, setOrder] = useState(false)

function handleOrder () {
  if (cash>=sushi.price){
  setOrder(true)
  setCash(currentCash=>currentCash-sushi.price)
  }
}




if(sushi.id>counter && sushi.id<=counter+4){
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleOrder}>
        
        {order ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
  } else {
    return null
  }

}

export default Sushi;
