// MainContent.js
import React, { useContext, useEffect, useState } from "react";
import { PeopleContext } from "../../context/ContextPeople";
import TestError from '../TestError/TestError';
import Content from '../Content/Content';
import Search from '../Search/Search';
import { useParams } from "react-router-dom";
import { URL_API, URL_UNIQ } from "../../constants/const";
import { req } from "./Fetch";

function MainContent() {
  const [error, setError] = useState(null);
  const {  setData, setIncrement, setDecrement,setOriginalData } = useContext(PeopleContext);
  const { id1, id2 } = useParams();
  // const [originalData, setOriginalData] = useState([]);

  const INCREMENT = id1 ? (parseInt(id1) > 2 ? encodeURIComponent((parseInt(id1) + 1).toString()) : 2) : '';
  const DECREMENT = id1 ? (parseInt(id1) > 1 ? encodeURIComponent((parseInt(id1) - 1).toString()) : 1) : '';
  
  useEffect(() => {
    req(URL_API + id1)
      .then((result) => {
        if (result) {
          setData(result);
          setOriginalData(result); // Зберегти оригінальні дані
          setError(false);
          setIncrement(URL_UNIQ + INCREMENT);
          setDecrement(URL_UNIQ + DECREMENT);
        }
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  }, [id1, INCREMENT, DECREMENT, setData, setDecrement, setIncrement, setOriginalData]);

  return (
    <div>
      {error ? <TestError /> : (
        <>
          <Content id1={id1} id2={id2}/>
        </>
      )}
    </div>
  );
}

export default MainContent;
