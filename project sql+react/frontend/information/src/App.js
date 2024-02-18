import React from "react";
import './index.css'
import LinkRoute from "./Components/LinkRoute/LinkRoute";
import { Context } from "./context/Context";
import { ContextPeople } from "./context/ContextPeople";





function App() {
  return (
    <>
    <Context>
  <ContextPeople>
    <LinkRoute />
  </ContextPeople>
</Context>

  
    </>
)
}


export default App;
