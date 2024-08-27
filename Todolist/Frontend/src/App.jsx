import React, { useState, useEffect } from "react";
import { createTask, deleteTask, getTask } from "./api";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTask();
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleAddTask = async (task) => {
    try {
      const response = await createTask(task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleUpdateTask = async (id, updatedTask) => {
    try {
      const response = await updatedTask(id, updatedTask);
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <div>
        <h1>Todo List</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              {task.title} - {task.description}
              <button
                onClick={() =>
                  handleUpdateTask(task._id, {
                    ...task,
                    completed: !task.completed,
                  })
                }
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
            </li>
          ))}
        </ul>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTask({
              title: e.target.title.value,
              description: e.target.description.value,
            });
          }}
        >
          <input name="title" placeholder="Task Title" required />
          <input name="description" placeholder="Task Description" required />
          <button type="submit">Add Task</button>
        </form>
      </div>
      );
    </div>
  );
};

export default App;
