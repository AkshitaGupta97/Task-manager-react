import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../features/task/taskSlice";

function FilterTask() {
    const {filter} = useSelector(state => state.task.filters);
    const dispatch = useDispatch();
  return (
    <div className="filter">
        <button onClick={() => dispatch(setFilter('all'))} 
            className={`all-btn ${filter==='all' ? 'active' : ''} `}>
                All
        </button>

        <button  onClick={() => dispatch(setFilter('completed'))}
            className={`complete-btn ${filter==='completed' ? 'active': ''} `}>
                Completed 
        </button>
    </div>
  )
}

export default FilterTask