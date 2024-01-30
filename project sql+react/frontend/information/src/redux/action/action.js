// actions.js
export const setOldState = (oldState) => ({
    type: 'SET_OLD_STATE',
    payload: oldState,
  });
  
export const createNewState = (newState) => ({
    type: 'CREATE_NEW_STATE',
    payload: newState,
  });
  


// export const add = (dataAdd) => ({
 
//     type: 'ADD_NEW_STATE',
//     payload: dataAdd,
//   });


 export const add = (dataAdd) => {
  
   return{
    type: 'ADD_NEW_STATE',
      payload: dataAdd,
  
   }
 }
 
      



export const remove = (dataRemove) => ({
    type: 'REMOVE_STATE',
    payload: dataRemove,
  });