
import './App.css'
import AddTask from './components/AddTask'
import FilterTask from './components/FilterTask'
import TaskList from './components/TaskList'

function App() {

  return (
    <div className="app-container">
      <h1>Task Manager App</h1>
      <AddTask />
      <FilterTask />
      {/* Task List Component will go here */}
      <TaskList />
    </div>
  )
}

export default App
