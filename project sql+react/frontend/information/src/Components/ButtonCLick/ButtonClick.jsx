import React from "react";
import style from "./ButtonClick.module.css"
import { Link } from "react-router-dom";
import  PropTypes from "prop-types";


function ButtonClick(props){
  return(
       <>
       <div className={style.container__button}>
         <Link to={props.increment}>
        <button className={style.container__position}>
        Two Page
        </button>
         </Link>

         <Link to={props.decrement}>
        <button  className={style.container__position}>One Page</button>
         </Link>
       </div>
       </>
  )
}


ButtonClick.propTypes={
    increment:PropTypes.string,
    decrement:PropTypes.number,
}



export default ButtonClick;