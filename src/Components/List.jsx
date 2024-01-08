import React, { useState } from 'react'

const List = (props) => {
    let {data, setdata, updateHandler} = props;

    const clickHandler = (id)=>{    
    const newdata = data.filter( (item)=> item.id !== id )
        console.log(newdata)
        setdata(newdata)
        localStorage.setItem("user", JSON.stringify((newdata)))   

    }

  

  return (
    <div className='list-container'>
        {(data.length === 0) ? <p>loading...</p> :
        <ol>
        {data.map( (item)=> {
            return <li key = {item.id}>
                <div className='list-div'>
                    <p>{item.name}</p>
                    <span onClick={()=>clickHandler(item.id)}>❌</span>
                    <button onClick={()=>updateHandler(item.id)}>update</button>
                </div>
            </li>         
            
        }  )}
    
        </ol>

}</div>
  )
}

export default List