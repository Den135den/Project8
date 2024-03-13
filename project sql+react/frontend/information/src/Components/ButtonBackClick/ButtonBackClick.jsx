import React, { useContext } from "react";
import style from "./ButtonBackClick.module.css"
import { Link} from "react-router-dom";
import img from '../../img/clickBack.svg'
import { BackgroundContext } from "../../context/Context";


function ButtonBackClick(props){

  const Theme = useContext(BackgroundContext)

  return(
        <div className={Theme.background === 'white'? style.block__clickBlack:style.block__clickWhite}> 
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


export default ButtonBackClick;