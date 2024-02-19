import React, { useContext, useEffect, useState } from "react";
import { PeopleContext } from "../../context/ContextPeople";
import { useLocation } from "react-router";
import { BackgroundContext } from "../../context/Context";
import style from "./Search.module.css";
import clear from './img/clear.svg'
import clearBlack from './img/clearBlack.svg'


function Search() { 
  const { originalData, setData } = useContext(PeopleContext);
  const Theme = useContext(BackgroundContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [usersNotFound, setUsersNotFound] = useState(false);
  const location = useLocation();

  const isFavouritePage = location.pathname.includes('/people/1') 
  || location.pathname.includes('/people/2') 
  || location.pathname.includes('/');



  const handleInputChange = (event) => {
    const input = event.target.value;
    setSearchTerm(input); 
    filterData(input);
  };

  const filterData = (input) => { 
    if (originalData && isFavouritePage) {
      const filteredData = originalData.filter(user => user.name.toLowerCase().includes(input.toLowerCase()));
      setData(filteredData);
      setUsersNotFound(filteredData.length === 0);
      
    }
  };

  useEffect(() => {
    const divElement = document.querySelector('.userNotFined');
   
    if (usersNotFound) {
      if (!divElement) {
        const newDivElement = document.createElement('h1');
        newDivElement.textContent = 'Користувачів не знайдено2';
        newDivElement.classList.add('userNotFined');
        newDivElement.style.color = Theme.background === 'white' ? 'red' : 'black';
        document.body.appendChild(newDivElement);
      }
    } 
    else {
      if (divElement) {
        divElement.remove();
      }
    }
  }, [usersNotFound, Theme.background, isFavouritePage]);
  


  useEffect(() => {
    setSearchTerm('');

    const divElement = document.querySelector('.userNotFined');
    if (divElement) {
      divElement.remove();
    }
  }, [location]);

  return (
    <div className={style.input__block}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Введіть ім'я користувача"
        className={style.input__content}
        disabled={location.pathname === '/people/1' || location.pathname === '/people/2' ? !isFavouritePage : isFavouritePage}
      />

<img
    src={searchTerm? clear: clearBlack }
    onClick={() => {
      if (searchTerm) {
        handleInputChange({ target: { value: '' } }); 
      }
    }}
    className={style.clear}
    disabled={searchTerm? clear: clearBlack }
    alt="clear"
  />
    </div>
  );


}
export default Search;
