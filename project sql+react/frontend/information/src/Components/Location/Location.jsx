import { useLocation } from 'react-router-dom';

function Lacation() {
  const location = useLocation();

  return (
    <div style={{color:'#fff'}}>
      <h2>Current Page</h2>
      <p>Pathname: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>Hash: {location.hash}</p>
    </div>
  );
}

export default Lacation;
