

// reducers.js
const initialState = {
    oldState: '',
    newState: '',
  };
  
export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_OLD_STATE':
        return { ...state, oldState: action.payload };
      case 'CREATE_NEW_STATE':
        return {
          ...state,
          oldState: state.newState,
          newState: action.payload,
        };
      default:
        return state;
    }
  };

  const masData = {
    items: []
  };
  



  export const reducerFavourite = (state = masData, action) => {
    switch (action.type) {
      case 'ADD_NEW_STATE':
        return {
          ...state,
          items: [...state.items, action.payload]
          .sort((a,b)=>a.id-b.id)
          
        };
  
        case 'REMOVE_STATE':
          return {
            ...state,
            items: state.items.filter(item => (
              item.id !== action.payload.id ||
              item.name !== action.payload.name
            ))
          };
        
        
      default:
        return state;
    }
  };
  
  
 
  