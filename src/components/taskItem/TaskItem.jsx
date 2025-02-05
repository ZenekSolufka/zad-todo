import './TaskItem.css'

const TaskItem = ({ task, toggleTask, removeTask }) => {
  return (
    <div className="task-item">
      <span
        onClick={() => toggleTask(task.id)}
        className={`task-text ${task.completed ? "completed" : ""}`}
      >
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)} className="delete-button">Usuń</button>
    </div>
  );
};

export default TaskItem