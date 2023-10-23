import React from 'react'

const Todo = () => {
    return (
        <div>
            <div className='header-wrapper'>
                <h3>My Todo App</h3>
            </div>
            <div className='button'>
                <input type='text' placeholder='Type a new Todo'/>
                <button>Add Todo</button>
            </div>
            
            <div className='todo'>
                <ul>
                    <li>
                        <input type='checkbox'/>
                        Learn React
                    </li>

                    <li>
                        <input type='checkbox'/>
                        Be Awesome!
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Todo