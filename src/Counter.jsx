import { useState } from 'react';
// const Counter = () => {
//     // let count=0;

//     // function incCount(){
//     //     count+=1;
//     //     console.log(count);
//     }
import React from 'react'

const Counter = () => {
    

    // let arr=useState(20);
    // console.log(arr);
    let [count,setCount]=useState(0);

    console.log("component is rendered ");
console.log(`count is =${count}`);

function increaseCount(){
    setCount(count+1);
    console.log(count);
}


  return ( 
      <>



<h3>count is {count} </h3>
<button onClick={increaseCount}>increase the count</button>

      </>
  )


}

export default Counter
