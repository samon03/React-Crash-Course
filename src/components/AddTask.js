import React, { useState } from 'react'

const AddTask = (props) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        // It prevents a link from following the URL so that the browser can't go another page. 
        // It prevents a submit button from submitting a form
        e.preventDefault();

        if(!text) {
            alert('Please add a text');
            return;
        }

        props.onAdd({text, day, reminder});

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" 
                  value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time </label>
                <input type="text" placeholder="Add Day & Time" 
                  value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="Checkbox"
                 placeholder="Add Task" 
                 checked={reminder}
                 value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <button type="submit" className="btn btn-block" >Submit</button>
        </form>
    )
}

export default AddTask
