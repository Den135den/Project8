import React, { useEffect, useState } from "react";
import style from "./Favourite.module.css";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/action/action";

function Favourite() {
  const [items, setFavourite] = useState([]);
  const [itemsLength, setFavouriteLength] = useState(true); 
  const dispatch = useDispatch();




  const removeUser = (info) => {
    dispatch(remove(info));

    fetch('http://localhost:5000/favouriteDelete2', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    })
      .then((response) => response.json())
      .then(() => {
        setFavourite(prevItems => prevItems.filter(item => item.id !== info.id)); 

      })
      .catch((error) => console.error('Error saving data on server:', error));
  }

  useEffect(() => {
    fetch('http://localhost:5000/favouriteGet')
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setFavourite(data);
          setFavouriteLength(true);
        }
      })
      .catch((error) => console.error('Error fetching data from server:', error));
  }, []);



  useEffect(() => {
    if (items.length === 0) {
      setFavouriteLength(false);
    }
  }, [items]);


  return (
    <>
    {itemsLength? (
      <div className={style.block__favourite}>
        {items.map((item) => (
          <div className={style.block__content} key={item.id}>
            <img
              src={item.img ? URL.createObjectURL(new Blob([new Uint8Array(item.img.data)])) : ''}
              alt="Favourite"
            />
            <div className={style.block__name}>{item.name}</div>
            <button className={style.button__content} onClick={() => removeUser(item)}>
              Удалить из изброного
            </button>
          </div>
        ))}
      </div>
    ) : (
      <h1 style={{color:'red'}}>Користувачів не знайдено</h1>
    )}
    </>
  );
}

export default Favourite;
