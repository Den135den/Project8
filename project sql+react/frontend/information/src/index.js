import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { setItmLocalStorage } from './localStorage/mainLocalStorage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
    
  {store.subscribe(()=>{
      setItmLocalStorage('humans', store.getState().data)
  })}

  
  </React.StrictMode>
  </Provider>

);
reportWebVitals();
