import React, { useEffect, useState } from "react";
import { URL_API, URL_UNIQ } from "../../constants/const";
import { req } from "./Fetch";
import { getID } from "../../function/api";
import TestError from '../TestError/TestError';
import Content from '../Content/Content';
import { useParams} from "react-router-dom";


function MainContent() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [increment, setIncrement] = useState(null);
  const [decrement, setDecrement] = useState(1);
  

  // const queryParams = new URLSearchParams(location.search);
  // const id = new (location.search).get('id');
  // console.log(id)

  const { id1, id2 } = useParams();

  const INCREMENT = id1 ? (parseInt(id1) > 2 ? encodeURIComponent((parseInt(id1) + 1).toString()) : 2) : '';

  const DECREMENT = id1 ? (parseInt(id1) > 1 ? encodeURIComponent((parseInt(id1) - 1).toString()) : 1) : '';
 



useEffect(() => {
    req( URL_API +id1 )
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
}, [id1, INCREMENT, DECREMENT]);


  return (
    <div>
      {error ? <TestError /> : <Content data={data} getID={getID} id1={id1} id2={id2}  increment={increment} decrement={decrement}/>}
    </div>
  );
}

export default MainContent;
