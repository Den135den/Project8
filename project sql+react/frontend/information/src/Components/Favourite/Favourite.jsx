import React from "react";
// import style from "./Favourite.module.css"
import { useSelector } from "react-redux";



function Favourite(){



const selector = useSelector(state=>state.data);
console.log(selector)

  return(
        <div style={{color:'red'}}>
         <div>
        {selector.items.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
        </div>
      ))}
    </div>
        </div>
  )
}


export default Favourite;