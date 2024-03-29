import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useLocation } from 'react-router-dom';
import { createNewState, setOldState } from '../../redux/action/action';
import { BackgroundContext } from '../../context/Context';

function Location() {
  const location = useLocation();
  const dispatch = useDispatch();

  // Access the state using useSelector
  const oldState = useSelector((state) => state.texterea.oldState);
  const newState = useSelector((state) => state.texterea.newState);

  const [stateBD, SetStateBD] = useState([])
  const Theme = useContext(BackgroundContext);
  
  // useEffect(() => {
  //   // Load data from localStorage when the component mounts
  //   const storedState = localStorage.getItem('myAppState');
  //   if (storedState) {
  //     const parsedState = JSON.parse(storedState);
  //     dispatch(setOldState(parsedState.oldState));
  //   }
  // }, [dispatch]);

  useEffect(()=>{
    
    fetch('http://localhost:5000/getData')
    .then(res=>res.json())
    .then(res=> SetStateBD(res))
    .catch(error=>console.log(error))

  },[])


  const handleCreateNewState = () => {

    dispatch(createNewState(oldState))
    

    fetch('http://localhost:5000/sendData', {
       method:'POST',
       headers:{
        'Content-Type':'application/json',
       },
       body: JSON.stringify({oldState})
    })
    .then(response => response.json())
    .then(data => console.log('Data saved on server:', data))
    .catch(error => console.error('Error saving data on server:', error));

  };


  return (
<div style={{ color: Theme.background === 'white' ? '#fff' : '#000' }}>
      <h2>Current Page</h2>
      <p>Pathname: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>Hash: {location.hash}</p>

      <div>
        <label>Old State:</label>
        <textarea
          type="text"
          placeholder='Добавити коментар'
          value={oldState}
          onChange={(e) => dispatch(setOldState(e.target.value))}
        />
        <div>
        <button onClick={handleCreateNewState}>Create New State</button>
          {stateBD.map(({id, value})=><div key={id}>{value}</div>)}
        </div>

        <div>{newState}</div>
      
      </div>
    </div>
  );
}

export default Location;
