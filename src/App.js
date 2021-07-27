import { useState, useEffect } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import './App.css';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async() => {
      const taskFromServer = await fetchTask();
      setTasks(taskFromServer);
    }
    getTasks();
  }, [])

  const fetchTask = async() => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
    
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const reminder = (id) => {
    setTasks(tasks.map((task) => 
       task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
    });
    
    const data = await res.json()

    setTasks([...tasks, data]);
  }


  return (
    <div className="container">
       <Header title="Task Tracker" 
            onAdd={ () => setShowAddTask(!showAddTask)}
            showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} />}
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
