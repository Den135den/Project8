import React, { lazy, useEffect, useState, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from './Information.module.css'
import { URL_PEOPLE_ID } from "../../constants/const";
import ButtonBackClick from "../ButtonBackClick/ButtonBackClick";
import Loader from "./Lazy/Loader";
import { useDispatch} from "react-redux";
import { add, remove } from "../../redux/action/action";

const DataInfo = lazy(()=>import('./Lazy/DataInfo'))



function Information() {
  
// const [isTrue, SetIsTrue] = useState(false)
const [dateInfo, setDateInfo] = useState([])
const [errorInfo, setErrorInfo] = useState(null)



  const dispatch = useDispatch()

  const { id1, id2 } = useParams();

  const navigate = useNavigate();



const addUser = (info) => () => dispatch(add({id: info.id, name: info.name}));

const removeUser = (info) => () => dispatch(remove({id: info.id, name: info.name}));




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
            } else {
              setErrorInfo(true);
            }
          })
          .catch((err) => {
            console.log(err);
            setErrorInfo(true);
          });
      }, [id1, id2]);

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

          
                <button onClick={addUser(info)} >ADD</button>
                 <button onClick={removeUser(info)}>DELETE</button> 

          


                  <Suspense  fallback={<Loader/>}>
                     <DataInfo {...info}/>
                  </Suspense>
                 </div>
                

      
              </div>
            ))
          )
        }
    </>
  );
}

export default Information;
