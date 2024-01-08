// Input.jsx
import React, { useState, useEffect } from 'react';

const Input = ({ todo, settodo, toggle, settoggle, clickedItem, updateItem }) => {
  const [inputval, setinputval] = useState('');

  useEffect(() => {
    if (!toggle && clickedItem) {
      setinputval(clickedItem.name);
    } else {
      setinputval('');
    }
  }, [toggle, clickedItem]);

  const changeHandler = (e) => {
    setinputval(e.target.value);
    console.log('changed');
  };

  const clickHandler = () => {
    if (toggle) {
      let allInputdata = { id: new Date().getTime().toString(), name: inputval };
      settodo((prev) => [...prev, allInputdata]);
      setinputval('');
      localStorage.setItem('user', JSON.stringify([...todo, allInputdata]));
    } else {
      // Update the existing item
      updateItem({ ...clickedItem, name: inputval });
      settoggle(true);
    }
  };

  return (
    <div className='input-container'>
      <input type='text' placeholder='Enter your work' value={inputval} onChange={changeHandler} />
      {toggle ? (
        <button onClick={clickHandler}>submit</button>
      ) : (
        <button onClick={clickHandler}>update</button>
      )}
    </div>
  );
};

export default Input;
