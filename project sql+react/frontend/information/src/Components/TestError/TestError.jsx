import React, { useContext } from "react";
import { BackgroundContext } from "../../context/Context";



function TestError(){
  const Theme = useContext(BackgroundContext)

  return(
    <div>
        <h1 style={{color: Theme.background === 'white'? 'red': '#000'}}>
          Error connection DB</h1>
    </div>
  )
}


export default TestError;