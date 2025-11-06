import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";

function AddTask() {
    // useDispatch is a hook that returns a reference to the dispatch function from the Redux store
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(text));
        setText('');
    }
    //console.log("added text",text);
    
  return (
    <form onSubmit={handleSubmit}
        className="add-task-form">
        <input type="text" placeholder="Add a task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button className="add-btn" type="submit">Add</button>
    </form>
  )
}

export default AddTask