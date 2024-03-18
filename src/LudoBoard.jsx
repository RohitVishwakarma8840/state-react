import React, { useState } from 'react'

const LudoBoard = () => {

 let [moves,setMoves]=useState({blue :0, yellow :0,red :0,green :0});
 let [count ,setCount]=useState(0);

 function updateMoves(){
  moves.blue+=1;
  console.log(` moves.blue =${moves.blue}`);
  setMoves({...moves});   // here it is an spread operator which means the copy of 
  // object that be have sent out 

 }

  return (
    <div>
        <p>Game begins </p>
 <div>
  <p>Blue moves={moves.blue}</p>
  <button style={{backgroundColor:"blue"}} onClick={updateMoves}>+1</button>
  <p>Yellow moves={moves.yellow}</p>
  <button style={{backgroundColor:"yellow" , color:"black"}}>+1</button>
  <p>Green moves={moves.green}</p>
  <button style={{backgroundColor:"green"}}>+1</button>
  <p>Red moves={moves.red}</p>
  <button style={{backgroundColor:"red"}}>+1</button>




 </div>




      
    </div>
  )
}

export default LudoBoard
