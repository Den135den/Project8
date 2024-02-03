import React, { useEffect, useState } from "react";
import style from "./Bookmark.module.css"
import img from '../../../img/bookmark3.svg'
import { useSelector } from "react-redux";


function Bookmark(){
    const selector = useSelector(state=>state.data);
    let [count, setCount] = useState(0)

    useEffect(() => {
     
        setCount(Object.keys(selector.items).length);
      }, [selector]);


  return(
    <div className={style.right_align_container}>
        <span className={style.count}>{count}</span>
        <img
           src={img}
           className={style.bookmark}
           width={'50px'}
           alt="Bookmark"
        /> 
    </div>
  )
}


export default Bookmark;