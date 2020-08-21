import React, { useState, useReducer } from 'react';

import { todoReducer, initialState } from '../reducers';

const TodoList = props => {
    const [task, setTask] = useState('');
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const handleChanges = e => {
        setTask(e.target.value)
    }


    return (
        <div>
            <h1>To Do List!</h1>
            <div className='task-list'>
                {state.map(e => {
                    return (
                        <div className={`task-card${e.completed ? ' completed' : ''}`}>
                        <h4>Task:<br/> {e.item}</h4>
                        <h5>Status: {e.completed === true ? 'Completed!' : 'In progress...'}</h5>
                        <button id={e.id} onClick={event => {
                            dispatch({ type: 'MARK_COMPLETE', payload: e.id })}}>Mark as complete</button>
                        </div>
                    )
                })}
                
            </div>

            <div>
                <form>
                    <label htmlFor='task'>New task: </label>
                    <input id='task' name='task' onChange={handleChanges} placeholder='' />
                    <button onClick={e => {
                        e.preventDefault();
                        dispatch({ type: 'ADD_TODO', payload: task })
                    }}>Add</button><br/>
                    <button onClick={e => {
                        e.preventDefault();
                        dispatch({ type: 'CLEAR_COMPLETE' })
                    }}>Clear Completed</button>
                </form>
            </div>

        </div>
    )
}

export default TodoList;