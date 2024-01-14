import React from "react";
import style from "./Content.module.css"
import PropTypes from 'prop-types';
import ButtonClick from "../ButtonCLick/ButtonClick";



function Content(props){


  return(
    <>
    <ButtonClick increment={props.increment} decrement={props.decrement}/>

    {props.data ? (
      <div className={style.container__list}>
        {props.data.map(({ img, url, name, age, email, history }) => (
          <div key={props.getID(url)} className={style.card__list}>
            <a href={url}>
              <img
                src={img ? URL.createObjectURL(new Blob([new Uint8Array(img.data)])) : ''}
                width='350px'
                alt='img'
                className={style.img__list}
              />
              <p>Name: {name}</p>
              <p>Age: {age}</p>
              <p>Email: {email}</p>
              <p>History: {history}</p>
              <p>{url}</p>
            </a>
          </div>
        ))}
      </div>
    ) : null}
  </>
   
  )
}


Content.propTypes ={
  increment:PropTypes.string,
  decrement:PropTypes.string,
   data: PropTypes.array,
   getID: PropTypes.func,
}

export default Content;