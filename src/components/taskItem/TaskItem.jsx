import "./TaskItem.css";

const TaskItem = ({ task, removeTask, toggleTask }) => {
  return (
    <div className="task-item">
      <span
        onClick={toggleTask}
        className={`'task-text', ${task.completed ? "completed" : ""}`}
      >
        {task.text}
      </span>
      <button className="delete-button" onClick={() => removeTask(task.id)}>
        USUŃ
      </button>
    </div>
  );
};

export default TaskItem;
