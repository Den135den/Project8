import React, { useContext, useEffect, useRef } from "react";
import style from "./Content.module.css"
import ButtonClick from "../ButtonCLick/ButtonClick";
import { Link } from "react-router-dom";
import { BackgroundContext } from "../../context/Context";
import { PeopleContext } from "../../context/ContextPeople";
import { getID } from "../../function/api";

function Content(props){
  const cardListRef = useRef(null);

  const Theme = useContext(BackgroundContext)
  const {data} = useContext(PeopleContext)




  return(
    <>
      <ButtonClick/>

      {data ? (
        <div className={style.container__list}>
          {data.map(({id, img, url, name }) => (
            <div ref={cardListRef} key={getID(url)} className={style.card__list} 
            style={{ 
              backgroundColor: Theme.background === "white" ? '#fff' : '#000'}}>
             <Link to={`/people/${props.id1}/${id}`}>
                <img
                  src={img ? URL.createObjectURL(new Blob([new Uint8Array(img.data)])) : ''}
                  width='350px'
                  alt='img'
                  className={style.img__list}
                />
                <p  className={ Theme.background === "white" ? style.textNameWhite : style.textNameDark} >{name}</p>
                <p  className={ Theme.background === "white" ? style.textNameWhite : style.textNameDark}>Детальніше.....</p>
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}



export default Content;
