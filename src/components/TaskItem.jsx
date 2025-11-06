
function TaskItem({task}) {
  return (
    <li>
        <div className="task-item">
            <h3>{task.text}</h3>
            <div className="task-item-btn">
                <button className="done-btn">Done</button>
                <button className="delete-btn">Delete</button>
            </div>
        </div>
    </li>
  )
}

export default TaskItem