import React, { useContext } from "react";
import style from "./ButtonClick.module.css"
import { Link } from "react-router-dom";
import { PeopleContext } from "../../context/ContextPeople";


function ButtonClick(){

  const {increment, decrement} = useContext(PeopleContext)


  return(
       <>
       <div className={style.container__button}>
         <Link to={increment}>
        <button className={style.container__position}>
        Two Page
        </button>
         </Link>

         <Link to={decrement}>
        <button  className={style.container__position}>One Page</button>
         </Link>
       </div>
       </>
  )
}






export default ButtonClick;