import '../Style/Task.css'
import {Button, Modal} from 'react-bootstrap';
import react,{useState} from 'react';

const Task = ({id, title, description, deleteTask}) => {
  const handleclick = (e) => {
    console.log(id)
    deleteTask(id);
  }
  const handleEdit = (e) => {
    console.log("edit")
  }
  return(
      <>
      <br />
        <div className="maincontainer">
        
        <div className="task_list">
          <li>{title}</li>
          <li>{description}</li>
          <button className="edit" onClick={handleEdit}>Edit</button>
          <button className="delete" onClick={handleclick}>Delete</button>
        </div>
        </div>
    </>
  );
}

export default Task;
