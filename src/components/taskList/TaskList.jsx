import TaskItem from '../taskItem/TaskItem'
import './TaskList.css'
const TaskList = ({ tasks, toggleTask, removeTask }) => {
  return (
    <div className='task-wrapper'>
      {tasks.length === 0 
        ? (<p className='empty-message'>Brak zadań</p>)
        : (tasks.map((task) => (
          <TaskItem key={task.id} toggleTask={toggleTask} removeTask={removeTask} task={task} />
        )))
      }
    </div>
  );
};


export default TaskList