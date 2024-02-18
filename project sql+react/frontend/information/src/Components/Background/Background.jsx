import React, { useContext, useEffect } from "react";
import { BackgroundContext } from "../../context/Context";
import style from './Background.module.css'; // Імпортуємо файли стилів
import sun from './img/sun.svg'
import moon from './img/moon.svg'




function Background() {
   const Theme = useContext(BackgroundContext);

   useEffect(() => {
    document.body.classList.remove(style.whiteBackground, style.darkBackground);

    switch (Theme.background) {
        case 'white':
            document.body.classList.add(style.whiteBackground);
            break;
        case 'dark':
            document.body.classList.add(style.darkBackground);
            break;
        default:
            break;
    }
}, [Theme.background]);


   return (
      <div className={style.background__flex}>
         <img src = {Theme.background === 'dark'? moon: sun}  
         onClick={()=>Theme.changeBackground(Theme.background === 'dark'? 'white': 'dark')} 
         className={style.img} alt="Background"/>
      </div>
   );
}

export default Background;
