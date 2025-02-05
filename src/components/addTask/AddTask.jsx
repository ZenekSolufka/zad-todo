
import { useState } from "react";
import './AddTask.css'
const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Dodaj zadanie"
        className="task-input"
      />
      <button type="submit" className="task-button">
        Dodaj
      </button>
    </form>
  );
};

export default AddTask