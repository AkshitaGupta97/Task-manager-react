import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        filters: 'all',
    },
    
    // reducers is an object that contains methods to handle different actions
    // reducers take the current state and an action as arguments
    // nanoid is used to generate unique IDs for tasks
    // completed is a boolean to track if the task is done or not
    // prepare callback allows us to customize the action payload
    // state can be mutated directly in Redux Toolkit because it uses Immer library under the hood
    // action contains a type and a payload

    
    reducers: {
        addTask: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: (text) => {
                return { 
                    payload: {
                        id: nanoid(),
                        text,
                        completed: false,
                    }
                };
            }

        },
        toggleTask: (state, action) => {
            const task = state.items.find(tsk => tsk.id === action.payload); // action.payload is the id of the task to toggle
            if(task){
                task.completed = !task.completed;
            }
        },
        deleteTask: (state, action) => {
            state.items = state.items.filters(itm => itm.id !== action.payload);
        },
        setFilter: (state, action) => {
            state.filters = action.payload;
        }
    } 
})

export const {addTask, toggleTask, deleteTask, setFilter}  = taskSlice.actions;

export default taskSlice.reducer;   