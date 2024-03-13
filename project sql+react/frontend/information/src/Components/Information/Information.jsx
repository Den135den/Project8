import React, { lazy, useEffect, useState, Suspense, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from './Information.module.css'
import { URL_PEOPLE_ID } from "../../constants/const";
import ButtonBackClick from "../ButtonBackClick/ButtonBackClick";
import Loader from "./Lazy/Loader";
import { useDispatch, useSelector} from "react-redux";
import { add, remove } from "../../redux/action/action";
import yellow from './img/yellow.svg'
import white from './img/white.svg'
import black from './img/black.svg'
import { BackgroundContext } from "../../context/Context";

const DataInfo = lazy(()=>import('./Lazy/DataInfo'))



function Information() {

  const selector = useSelector(state=>state.data);
  const Theme = useContext(BackgroundContext)


const [dateInfo, setDateInfo] = useState([])
const [isTrue, setIsTrue] = useState(null)
const [errorInfo, setErrorInfo] = useState(null)


  const dispatch = useDispatch()

  const { id1, id2 } = useParams();

  const navigate = useNavigate();
 
  const addUser = (info) => () => {
  
    dispatch(add(info));
  
    fetch('http://localhost:5000/favouritePost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ request: info }),
    })
      .then((response) => response.json())
      .then((data) =>data)
      .catch((error) => console.error('Error saving data on server:', error));

  };
  

const removeUser = (info) => () => {

  dispatch(remove({id: info.id, name: info.name}));

  
  fetch('http://localhost:5000/favouriteDelete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ request: info }),
    })
      .then((response) => response.json())
      .then((data) => console.log('Data saved on server:', data))
      .catch((error) => console.error('Error saving data on server:', error));
}





function onClicking(e){
  e.preventDefault();
  navigate(-1);
}
 
function req(url){
        return fetch(url)
        .then((result)=>result.json())
        .catch((err) => {
            console.log(err);
            setErrorInfo(true);
          });
    }
  
    useEffect(() => {
      req(`${URL_PEOPLE_ID}/${id1}/${id2}`)
        .then((result) => {
          if (result) {
            setDateInfo(result);
            setErrorInfo(false);
    
            const isTrue = result.some(
              (info) => selector.items
              .some((item) => item.id === info.id));


            setIsTrue(isTrue);
          } else {
            setErrorInfo(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setErrorInfo(true);
        });
    }, [id1, id2, selector]);
    

  return (
    <>
         <ButtonBackClick onClicking={onClicking}/>
        
        {errorInfo? (<h1>Error</h1>) : 
          (
            dateInfo.map((info) => (
              <div key={info.id} style={{ color: 'red' }}>
                <div className={style.info__container}>
                  <img  src={info.img ? 
                  URL.createObjectURL(new Blob([new Uint8Array(info.img.data)])) : ''} 
                  className={style.img__focus}
                  alt="img" 
                  />
            
                  <img
                    src={isTrue ? yellow :  Theme.background === 'white'? white: black}
                    onClick={() => (isTrue ? removeUser(info)() : addUser(info)())}
                    className={style.img}
                   alt="img"
                  /> 

                 <Suspense  fallback={<Loader/>}>
                     <DataInfo {...info}/>
                  </Suspense>

                
                 </div>

                 <div className={style.position__block}>
                    <div className={style.position__button}>

                      
                      {isTrue? 
                      <button className={Theme.background === 'white'? style.button__contentBlack : style.button__contentWhite} onClick = {removeUser(info)}>Удалить из изброного</button>:
                      <button className={Theme.background === 'white'? style.button__contentBlack : style.button__contentWhite} onClick = {addUser(info)}>Добавить в избраное</button>}
                   </div>
                  </div>      
              </div>
            ))
          )
        }
    </>
  );
}

export default Information;
