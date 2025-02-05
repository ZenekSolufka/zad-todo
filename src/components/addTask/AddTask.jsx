
import { useState } from "react";
import './AddTask.css'
const AddTask = ({ addTask }) => {
  
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return;
    addTask(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Wpisz treść zadania"
      />
      <button type="submit">Dodaj zadanie</button>
    </form>
  );
};

export default AddTask