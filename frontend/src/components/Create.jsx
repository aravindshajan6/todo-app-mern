import React, { useState } from 'react'
import axios from 'axios';

function Create()  {

  const [task, setTask ] = useState('');
  const handleAdd = () => {
    
    console.log('inside handle add!');
    
      if(task.length === 0) {
        alert("Please enter a task !");
        exit();
      }
      else {
        axios.post('http://localhost:4000/add', {task: task})
        .then((result) => {
          console.log(result);
          location.reload();
        })
        .catch((error) => console.log(error.message))
      }
    
  }

  return (
    <div className='create_form' >
        <input className='input-box' type="text" name='' id='' placeholder='Enter new task . . . ' onChange={(e) => setTask(e.target.value)}/>
        
        <button className="glow-on-hover" type="button" onClick={ handleAdd }>Add Task</button>
    </div>
  )
}

export default Create