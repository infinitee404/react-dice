import React from "react";
import Dice from "./dice"
import "./styles.css"

const App = () =>{
  const [dice, setDice] = React.useState(0)

  function rollDie(){
    setDice(Math.ceil(Math.random()*6))
  }

  React.useEffect(()=>{
    console.log("Dice rolled");
  },[dice])

    return(
    <div className="container">
      <h1>Dice</h1>
      <div className="dice-container">
        <Dice value="1" classNameValue="face-one"/>
        <Dice value="2" classNameValue="face-two"/>
        <Dice value="3" classNameValue="face-three"/>
        <Dice value="4" classNameValue="face-four"/>
        <Dice value="5" classNameValue="face-five"/>
        <Dice value="6" classNameValue="face-six"/>
      </div>
      <button 
        onClick={rollDie}
        className="roll-button"
      >Roll</button>
    </div>

  )
}

export default App