import React, { useEffect, useState } from "react";
import { URL_API, URL_UNIQ } from "../../constants/const";
import { req } from "./Fetch";
import { getID } from "../../function/api";
import TestError from '../TestError/TestError';
import Content from '../Content/Content';
import { useLocation } from "react-router-dom"; // Import from "react-router-dom"

function MainContent() {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [increment, setIncrement] = useState(null);
  const [decrement, setDecrement] = useState(1);
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id')

  const INCREMENT = id ? (parseInt(id) > 2 ? encodeURIComponent((parseInt(id) + 1).toString()) : 2) : '';

  const DECREMENT = id ? (parseInt(id) > 1 ? encodeURIComponent((parseInt(id) - 1).toString()) : 1) : '';


useEffect(() => {
    req(URL_API +id)
      .then((result) => {
        if (result) {
          setData(result);
          setError(false);
          setIncrement(URL_UNIQ+INCREMENT)
          setDecrement(URL_UNIQ+DECREMENT)
        }
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
}, [id, INCREMENT, DECREMENT]);


  return (
    <div>
      {error ? <TestError /> : <Content data={data} getID={getID} id={id} increment={increment} decrement={decrement}/>}
    </div>
  );
}

export default MainContent;
