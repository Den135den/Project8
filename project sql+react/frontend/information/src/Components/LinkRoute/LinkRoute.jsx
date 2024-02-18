import React, { useContext, useEffect, useState, useCallback } from "react";
import style from "./LinkRoute.module.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { link, routes } from "../../route/Routes";
import Bookmark from "./Bookmark/Bookmark";
import homeWhite from './imgLogo/homeWhite.svg';
import homeBlack from './imgLogo/homeBlack.svg';

import peopleWhite from './imgLogo/peopleWhite.svg';
import peopleBlack from './imgLogo/peopleBlack.svg';

import searchBlack from './imgLogo/searchBlack.svg' 
import searchWhite from './imgLogo/searchWhite.svg'

import Background from "../Background/Background";
import { BackgroundContext } from "../../context/Context";
import Search from "../Search/Search";
import { ContextPeople } from "../../context/ContextPeople";

function LinkRoute() {

  const Theme = useContext(BackgroundContext);
  const [icon, setIcon] = useState(Theme.background === 'white' ? homeWhite : homeBlack);



  const handleNavLinkClick = useCallback((link) => {
    switch (link) {
      case '/':
        setIcon(Theme.background === 'white' ? homeWhite : homeBlack);
        break;
      case '/people/1':
        setIcon(Theme.background === 'white' ? peopleWhite : peopleBlack);
        break;
        case '/users':
          setIcon(Theme.background === 'white' ? searchWhite : searchBlack);
          break;  
      default:
        setIcon(Theme.background === 'white' ? homeWhite : homeBlack);
    }
  }, [Theme.background]);



  useEffect(() => {
    const handlePathChange = () => {
      handleNavLinkClick(window.location.pathname); // Отримати поточний шлях
    };
    handlePathChange();
  }, [Theme.background, handleNavLinkClick]); 

  return (
    <BrowserRouter>
      <div className={style.container__link}>
        <img src={icon} alt="Logo" width={'60px'} />
        {link.map(({ to, value, id }) => (
          <NavLink
            key={id}
            to={to}
            onClick={() => handleNavLinkClick(to)}
            className={Theme.background === 'white' ? style.value__linkWBlack : style.value__linkWhite}
          >
            {value}
          </NavLink>
        ))}
        <NavLink to="/favourite"><Bookmark /></NavLink>

        <Background />
       <Search/>
      </div>



      <Routes>
        {routes.map(({ path, element, id }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </Routes>



    </BrowserRouter>
  );
}

export default LinkRoute;
