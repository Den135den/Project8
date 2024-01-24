import React from "react";
import style from "./DataInfo.module.css"



function DataInfo({name, age, email, history}){

    
  return(
    <div className={style.position__text}>
    <div className={style.link__block}>Name: {name}</div>
     <div className={style.link__block}>Age: {age}</div>
     <div className={style.link__block}>Email: {email}</div>
     <div className={style.link__block}>History: {history}</div>
   </div>
  )
}


export default DataInfo;