import React from 'react'

const Todo = () => {
    return (
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
    )
}

export default Todo