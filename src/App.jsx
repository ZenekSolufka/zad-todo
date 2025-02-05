import { AddTask, TaskList } from './components/imports'
import './App.css'
import {useState} from 'react'

const App = () => {
  
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

    const toggleTask = (id) => {
      {tasks.map((task) =>(
        task.id === id ? { ...task, completed: !task.completed } : task
      ))}
    }

    const removeTask = (id) => {
      setTasks(tasks.filter((task) => task.id != id)
      )
      
    }

  return (
    <div className="app-container">
      <h1 className="app-title">Lista Zadań</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
    </div>
  );
};

export default App
