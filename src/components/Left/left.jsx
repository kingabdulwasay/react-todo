import React, { useState, useEffect } from 'react';
import './left.css';
import { useNavigate } from 'react-router-dom';

const Left = () => {
  const [formData, setFormData] = useState({
    authorName : !localStorage.getItem("username") ? 'Anonymous' : localStorage.getItem("username"),
    title: '',
    category: '',
    priority: '',
    hour: '',
    date: '',
    time: '',
    isComplete : false
  });

  const [tasks, setTasks] = useState([]);
  const [viewMode, setViewMode] = useState(false);
  const navigate = useNavigate();
  const handleData = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getData = () => {
   setTasks([...tasks, {...formData, id : Date.now()}]);
    setViewMode(true);
  };

  const deleteTask = (id) => {
    setTasks((alltodos) => alltodos.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
      setTasks((alltodos) => {
        return alltodos.map((todo)=>{
          if(todo.id == id){
            return {...todo , isComplete : !todo.isComplete}
          }
          return todo
        })
      })
  }


  return (
    <div style={{display:"flex", flexDirection:"column", width:"100%", padding: "20px"}}>
      {viewMode ? (
        <div className="alltodos">
          {tasks.map((todo) => (
            <div className={todo.isComplete ? "box-complete" : "box-uncomplete"}  key={todo.id}>
              <div className="author">
                <img src={!localStorage.getItem("email") ? "https://www.bing.com/th?id=OIP.0siT9Vkwx8tb_kFTi-KV1wHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" : `https://api.dicebear.com/9.x/adventurer/svg?seed=${localStorage.getItem("email")}`} alt="" />
                <span>{todo.authorName}</span>
              </div>
              <span>ID: {todo.id}</span>
              <span>TITLE: {todo.title}</span>
              <span>CATEGORY: {todo.category}</span>
              <span>PRIORITY: {todo.priority}</span>
              <span>ESTIMATED: {todo.hour}</span>
              <span>DATE: {todo.date}</span>
              <span>TIME: {todo.time}</span>
              <div className="btn-grp">
                <button className="btn-1" onClick={() => setViewMode(false)}>Add New</button>
                <button className="btn-2" onClick={() => toggle(todo.id)}>{todo.isComplete ? "Completed" : "Uncomplete"}</button>
                <button className="btn-3" onClick={() => deleteTask(todo.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="main-add">
          <div className="container">
            {/* <div className="btn-group">
              <button className="add" onClick={() => setViewMode(false)}>Add New</button>
              <button className="view" onClick={() => setViewMode(true)}>View All</button>
            </div> */}
            <div className="form">
              <input type="text" name="title" placeholder="Enter title" value={formData.title} onChange={handleData} />
              <select name="category" value={formData.category} onChange={handleData}>
                <option value="" disabled>Enter Category</option>
                <option value="Personal">Personal</option>
                <option value="Official">Official</option>
              </select>
              <select name="priority" value={formData.priority} onChange={handleData}>
                <option value="" disabled>Select Priority</option>
                <option value="Low">Low Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
              </select>
              <input type="text" name="hour" placeholder="Enter estimated time" value={formData.hour} onChange={handleData} />
              <input type="date" name="date" value={formData.date} onChange={handleData} />
              <input type="time" name="time" value={formData.time} onChange={handleData} />
              <div className="btn-group">
              <button className="add" onClick={() => getData()}>Add New</button>
              <button className="view" onClick={() => setViewMode(true)}>View All</button>
            </div>
            </div>
          </div>
          <div className="pic"></div>
        </div>
      )}
  
    </div>
  );
};

export default Left;
