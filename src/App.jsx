import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import ProgressTracker from "./components/ProgressTracker"
import { useEffect, useState } from "react";
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task])
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div className="App">
      <header>
        <div>
          <h1>Task<span>Buddy</span></h1>
          <p>Your friendly task manager</p>
        </div>
      </header>
      <TaskForm addTask={addTask}/>
      <ProgressTracker tasks={tasks}/>
      <TaskList tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      {tasks.length>0 && (<button className="clear-btn" onClick={clearTasks}>Clear All Tasks</button>)}
    </div>
  )
}

export default App
