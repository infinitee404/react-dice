import React from "react";

const Dice = (props) =>{
    let diceArray = []
    for (let i=0; i<props.value; i++){
        diceArray.push(<span className="dot"></span>)
    }
    return(
        <div className={`die ${props.classNameValue}`}>{diceArray}</div>
    )
}

export default Dice

//<span className="dot"></span>