import React from "react";
import style from "./NotFound.module.css"
import { useLocation } from "react-router";



function NotFound(){

    const location = useLocation();


  return(
    <div className={style.container__notfound}>
    <h1 className={style.textMain}>404 - Not Found Page</h1>
    <p className={style.textPage}>Sorry, the page you are looking {location.pathname} for does not exist.</p>
  </div>
  )
}



export default NotFound;