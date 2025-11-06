import { useState } from "react";


function AddTask() {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

  return (
    <form onSubmit={handleSubmit}
        className="add-task-form">
        <input type="text" placeholder="Add a task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
    </form>
  )
}

export default AddTask