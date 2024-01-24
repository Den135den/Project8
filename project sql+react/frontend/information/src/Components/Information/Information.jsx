import React, { lazy, useEffect, useState, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from './Information.module.css'
import { URL_PEOPLE_ID } from "../../constants/const";
import ButtonBackClick from "../ButtonBackClick/ButtonBackClick";
import Loader from "./Lazy/Loader";


const DataInfo = lazy(()=>import('./Lazy/DataInfo'))


function Information() {
 const { id1, id2 } = useParams();

 const navigate = useNavigate();

 const [dateInfo, setDateInfo] = useState([])
 const [errorInfo, setErrorInfo] = useState(null)

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
