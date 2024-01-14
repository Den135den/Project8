import React from "react";
import style from "./LinkRoute.module.css"
import {   BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {link, routes} from '../../route/Routes'

function LinkRoute(){

  return(

   <BrowserRouter>
  <div className={style.container__link}>
  {link.map(({to, value, id})=>(
        <NavLink key={id} to={to} className={style.value__link}>{value}</NavLink>
 ))}
  </div>
  


    <Routes>
    {routes.map(({path, element, id})=>(
        <Route key={id} path={path} element={element}/>   
    ))}
      
    </Routes>
</BrowserRouter>

   
  )
}


export default LinkRoute;