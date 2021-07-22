import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import './App.css';

function App() {
  const [tasks, setTask] = useState(
      [
        {
            "id": 1,
            "text": "Doctors Appointment",
            "day": "Feb 5th at 2:30pm",
            "reminder": true
          },
          {
            "id": 2,
            "text": "Meeting at School",
            "day": "Feb 6th at 1:30pm",
            "reminder": true
          }
      ]
  );

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  }

  const reminder = (id) => {
    setTask(tasks.map((task) => 
       task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random * 1000) + 1;

    // merge input values with id 
    const newTask = {id, ...task};

    //add to tasks

    setTask([...tasks, newTask]);

  }


  return (
    <div className="container">
       <Header title="Task Tracker"/>
       <AddTask onAdd={addTask} />
       { tasks.length > 0 ?
          <Tasks tasks={tasks}  
            onDelete={deleteTask} 
            onToggle={reminder} />
          : "No task to show"
       }
    </div>
  );
}

export default App;
