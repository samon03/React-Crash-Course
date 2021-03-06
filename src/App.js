import { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async() => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    }
    getTasks();
  }, [])

  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
    
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const reminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateToggle = {...taskToToggle, reminder: !taskToToggle.reminder}


    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateToggle)
    });
    
    const data = await res.json();

    setTasks(tasks.map((task) => 
       task.id === id ? { ...task, reminder: data.reminder } : task
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
    <Router>
      <div className="container">
        <Header title="Task Tracker" 
              onAdd={ () => setShowAddTask(!showAddTask)}
              showAdd={showAddTask} />
       
        <Route path='/' exact render={(props) => 
          (
            <>
            { showAddTask && <AddTask onAdd={addTask} />}
            { tasks.length > 0 ?
                <Tasks tasks={tasks}  
                  onDelete={deleteTask} 
                  onToggle={reminder} />
                : "No task to show"
            }
          </>
          )} />
        <Route path='/about' component={About} />
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
