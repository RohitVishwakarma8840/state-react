import React from 'react'
import { useState } from 'react'
// function clicked(){
//   console.log("clicked");
// }

const LikeButton = () => {

  let [isLiked,setisLiked]=useState(false);
// console.log("component is re-rendered ");
  function toggleLike(){
    setisLiked(!isLiked);
    
    }
    
    let likestyle={color:"red"};

  return (
    <div>
{/* {isLiked.toString()} */}
<p onClick={toggleLike}>{isLiked ? <i className="fa-solid fa-heart" style={likestyle}></i>: <i className="fa-regular fa-heart"></i>}</p>
     
</div>
  )
}

export default LikeButton
