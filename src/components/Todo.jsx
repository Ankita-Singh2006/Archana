import { useState } from "react";
import "../styles/Todo.css";

function Todo({ goBack }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      )
    );
  };

  return (
    <div className="todo-page">

      <button
        className="backBtn"
        onClick={goBack}
      >
        ←
      </button>

      <div className="todo-card">

        <h1>📝 Todo App</h1>

        <div className="todo-input">

          <input
            type="text"
            placeholder="Add a task..."
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
          />

          <button onClick={addTask}>
            Add
          </button>

        </div>

        <div className="todo-list">

          {tasks.length === 0 ? (
            <p className="empty-text">
              No tasks added yet.
            </p>
          ) : (
            tasks.map((item) => (
              <div
                key={item.id}
                className="todo-item"
              >

                <span
                  className={
                    item.completed
                      ? "completed"
                      : ""
                  }
                  onClick={() =>
                    toggleTask(item.id)
                  }
                >
                  {item.text}
                </span>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteTask(item.id)
                  }
                >
                  ✕
                </button>

              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default Todo;