import { useState } from 'react';
import '../Style/AddTask.css'

function AddTask({addTodo}) {
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    function handleclick(e) {
        e.preventDefault()
        addTodo({
            title,
            description,
            completed: false,
        })
    }
  return(
      <>
     <div className="container">
        <div className="data">
            <div className="title">
         Title: <input type="text" placeholder="Enter Title" onChange={e=>settitle(e.target.value)}/>
            </div>
            <div className="description">
         Description: <input type="text" placeholder="Enter Description" onChange={e=>setdescription(e.target.value)}/>
            </div>
        </div>
         <div className="add">
         <button onClick={handleclick}>Add Task</button>
         </div>
     </div>
      </>
  );
}

export default AddTask;
