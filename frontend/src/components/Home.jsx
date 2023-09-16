import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import './Home.css'
import { BsCircleFill, BsFillCheckCircleFill, BsFillCircleFill, BsFillTrashFill } from 'react-icons/bs';

const Home = () => {
  const [todos, setTodos ] = useState([]);
  useEffect(() => {
    console.log('inside fetch useEffect')
    axios.get('http://localhost:4000/get')
    .then((result) => {
      console.log('data fetched from : ', result);
      setTodos(result.data);
    })
    .catch((err) => console.log(err.message));

  }, [ ])

const handleEdit = (id) => {

  console.log("inside HandleEdit");

  axios.put('http://localhost:4000/update/'+id)
    .then((result) => { 
      console.log(result);
      location.reload();
    })
    .catch((err) => console.log(err.message));

}

const handleDelete= (id) => {

  console.log("inside HandleDelete");

  axios.delete('http://localhost:4000/delete/'+id)
    .then((result) => { 
      console.log(result);
      location.reload();
    })
    .catch((err) => console.log(err.message));

}

  return (
    <div className='main-container'>
      <div className='image-container'>
          <img src="/todo_img.png" alt="todo image" className='todo-image circle'/>
        </div>
        <div className='home-container'>
            <h2>TODO APP</h2>
            <Create />
            {
              todos.length === 0 ?
              ( <div>No records found !</div> ) :
              (
                todos.map((todo, index) => (
                  <div className="task hvr-shutter-in-vertical" key={ index }>
                    <div className="check-box" onClick={()=> handleEdit(todo._id) }>
                      { todo.done ? ( < BsFillCheckCircleFill className='icon' /> ) : ( < BsCircleFill className='icon' /> ) }
                    </div>
                    <p className={todo.done ? "line-through" : undefined }>
                        { todo.task }
                    </p>
                    <div className='delete-box'>
                      <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id) }/></span>
                    </div>
                  </div>
                
              )) 
              )
            }
            
        </div>
        
    </div>
  )
}

export default Home