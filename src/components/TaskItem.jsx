import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../features/task/taskSlice";

function TaskItem({task}) {
    const dispatch = useDispatch();
  return (
    <li className={`task ${task.completed ? 'task-completed' : ''}`}>
        <div className="task-item">
            <h3>{task.text}</h3>
            <div className="task-item-btn">
                <button className="done-btn" onClick={() => dispatch(toggleTask(task.id))}>{task.completed ? 'Undo' : 'Done'}</button>
                <button className="delete-btn" onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            </div>
        </div>
    </li>
  )
}

export default TaskItem