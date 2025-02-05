import TaskItem from '../taskItem/TaskItem'
import './TaskList.css'
const TaskList = ({ tasks, toggleTask, removeTask }) => {
  return (
    <div className='task-wrapper'>
      {tasks.length === 0 ? (
        <p className="empty-message">Brak zadań</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} toggleTask={toggleTask} removeTask={removeTask} />
        ))
      )}
    </div>
  );
};


export default TaskList