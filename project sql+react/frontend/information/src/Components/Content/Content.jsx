import React from "react";
import style from "./Content.module.css"
import PropTypes from 'prop-types';
import ButtonClick from "../ButtonCLick/ButtonClick";
import { Link } from "react-router-dom";



function Content(props){

  return(
    <>
    <ButtonClick increment={props.increment} decrement={props.decrement}/>

    {props.data ? (
      <div className={style.container__list}>
        {props.data.map(({id, img, url, name}) => (
          <div key={props.getID(url)} className={style.card__list}>
      
            <Link to={`/people/${props.id1}/${id}`}>
              
              <img
                src={img ? URL.createObjectURL(new Blob([new Uint8Array(img.data)])) : ''}
                width='350px'
                alt='img'
                className={style.img__list}
              />
              <p className={style.textName}>{name}</p>
              <p className={style.textName}>Детальніше.....</p>
            </Link>


          </div>
        ))}
      </div>
    ) : null}
  </>
   
  )
}


Content.propTypes ={
  increment:PropTypes.string,
   data: PropTypes.array,
   getID: PropTypes.func,
}

export default Content;