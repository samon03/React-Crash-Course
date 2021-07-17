import React from 'react'

const Task = (props) => {
    return (
        <div className="task">
           <h4>{props.task.text}</h4>
           <p>{props.task.day}</p>
        </div>
    )
}

export default Task
