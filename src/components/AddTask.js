import React from 'react'

const AddTask = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" />
            </div>
            <div className="form-control">
                <label>Day & Time </label>
                <input type="text" placeholder="Add Day & Time" />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="Checkbox" placeholder="Add Task" />
            </div>
            <button type="submit" className="btn btn-block" >Submit</button>
        </form>
    )
}

export default AddTask
