import React, { useState, useReducer } from 'react';
import styled from 'styled-components';

import { 
    todoReducer, 
    initialState,
    ADD_ITEM,
    MARK_COMPLETE, 
    CLEAR_COMPLETED
} from '../reducers';

const TodoList = props => {
    const [task, setTask] = useState([]);
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleChanges = e => {
        console.log(e.target.value);
        
        setTask({
            ...task,
            [e.target.name]: e.target.value});
    };

    const addItem = (e) => {
        e.preventDefault();
        const newTask = {
            task: task.task,
            completed:false,
            id:Date.now()
        };
        dispatch({ type:ADD_ITEM, payload:newTask});
        setTask({
            task:"",
            completed:'',
            id: ''
        })
    }
    const clearCompleted = (e) =>{
        e.preventDefault();
        dispatch ({ type: CLEAR_COMPLETED});
    }

    return (
        <List>
            <h1>Brittany's To Do List!</h1>
            <div className='task-list'>
                {state.map(e => {
                    return (
                        <div className={e.completed ? ' completed' : ''}>
                        <h4>{e.task}</h4>
                        <h5>Status: {e.completed === true ? 'Completed!' : 'In progress...'}</h5>
                        <button id={e.id} onClick={event => {
                            dispatch({ type: MARK_COMPLETE, payload: e.id })}}>Mark as complete</button>
                        </div>
                    )
                })}
                
            </div>

            <div>
                <form>
                    <input id='task' name='task' onChange={handleChanges} value={task.task} placeholder='Enter new task here' />
                    <button onClick={addItem}>Add</button><br/>
                    <button onClick={clearCompleted} >Clear Completed</button>
                </form>
            </div>

        </List>
    )
}
const List = styled.div`
        .task-list{
            display:flex;
            justify-content:space-evenly;
            flex-wrap:wrap;

            div{
                width:25vw;
                margin:2%;
            }
        }
`

export default TodoList;