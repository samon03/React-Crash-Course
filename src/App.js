import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

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


  return (
    <div className="container">
       <Header title="Task Tracker"/>
       { tasks.length > 0 ?
          <Tasks tasks={tasks}  onDelete={deleteTask} />
          : "No task to show"
       }
    </div>
  );
}

export default App;
