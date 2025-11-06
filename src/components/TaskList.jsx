import { useSelector } from "react-redux"
import TaskItem from "./TaskItem"


function TaskList() {
    // useSelector to get tasks from the Redux store
    const {items} = useSelector(state => state.task) // useSelector(state => state.task) to access the task slice of the state in the Redux store
  return (
    <ul>
        {
            items && items.length > 0 ? 
            items.map(task => (
                <TaskItem key={task.id} task={task} />
            )) : 
            (
                <li>No tasks found</li>
            )
        }
    </ul>
  )
}

export default TaskList