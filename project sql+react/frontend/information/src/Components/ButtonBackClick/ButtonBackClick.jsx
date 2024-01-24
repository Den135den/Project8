import React from "react";
import style from "./ButtonBackClick.module.css"
import { Link} from "react-router-dom";
import img from '../../img/clickBack.svg'
import PropTypes from 'prop-types';

function ButtonBackClick(props){
  return(
        <div className={style.block__click}> 
        <img src={img} alt="img" width={'15px'}/>
          <Link
        onClick={props.onClicking}
        className={style.contetnt__click}
          >
          Back
       </Link>  
        </div>
  )
}
ButtonBackClick.propTypes = {
    onClicking:PropTypes.number
    
  }

export default ButtonBackClick;