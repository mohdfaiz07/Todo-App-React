// App.jsx
import React, { useState } from 'react';
import Input from './Components/Input';
import List from './Components/List';
import Cover from './Components/Cover';

const App = () => {
  const [todo, settodo] = useState(JSON.parse(localStorage.getItem('user')) || []);
  const [toggle, settoggle] = useState(true);
  const [clickedItem, setClickedItem] = useState(null);

  const updateHandler = (id) => {
    const clickedItem = todo.find((item) => item.id === id);
    console.log(clickedItem);
    settoggle(false);
    setClickedItem(clickedItem);
  };

  const updateItem = (updatedItem) => {
    const updatedData = todo.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    settodo(updatedData);
    setClickedItem(null);
    localStorage.setItem('user', JSON.stringify(updatedData));
  };

  return (
    <div className='container'>
      <h1>TODO APP </h1>
      <Cover>
        <Input todo={todo} settodo={settodo} toggle={toggle} settoggle={settoggle} clickedItem={clickedItem} updateItem={updateItem} />
        <List data={todo} setdata={settodo} updateHandler={updateHandler} />
      </Cover>
    </div>
  );
};

export default App;
