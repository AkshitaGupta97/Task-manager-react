
function TaskItem({task}) {
  return (
    <li>
        <div>
            <h3>{task.text}</h3>
            <div>
                <button>Done</button>
                <button>Delete</button>
            </div>
        </div>
    </li>
  )
}

export default TaskItem