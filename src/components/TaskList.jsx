import { useSelector } from "react-redux"
import TaskItem from "./TaskItem"


function TaskList() {
    // useSelector to get tasks from the Redux store
    const {items, filters} = useSelector(state => state.task) // useSelector(state => state.task) to access the task slice of the state in the Redux store
    
    const filtered = (filters === 'completed') ? 
        items.filter(task => task.completed) : items;


    console.log("items in tasklist",items);
  return (
    <ul className="task-list">

        {
            filtered && filtered.length > 0 ? 
            filtered.map(task => (
                <TaskItem key={task.id} task={task} />
            )) : 
            (
                <li className="no-task">No tasks found</li>
            )
        }
    </ul>
  )
}

export default TaskList