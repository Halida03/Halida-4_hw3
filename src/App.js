import React from "react";
import "./App.css";
import { useState } from "react";
import Input from "./Components/input";
import Button from "./Components/Button";
import Switcher from "./Components/switcher";
import Todoitem from "./Components/todoitem";
import Clear from "./Components/clear";


function App() {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [allTodos, setAllTodos] = useState([]);  //[] - для данных 
  const [viewMode, setViewMode] = useState("todo"); // статус выполнен/не выполнен
  // const [completedTodos, setCompletedTodos] = useState([]);
  const date = new Date();

  const todoTasks = allTodos.filter((task) => !task.completed);
  const completedTasks = allTodos.filter((task) => task.completed); 

  const addNewTask = () => {
    if (newTodoTitle.trim() !== "") {
      const newTask = { 
        title: newTodoTitle, 
        description: newDescription,
        id: date.getMilliseconds(),
      };

      setAllTodos([...allTodos, newTask]);
      setNewTodoTitle("");
      setNewDescription("");
    }
  }

  const deleteTask = (id) =>{
    setAllTodos(allTodos.filter((item) => item.id !== id));
}

  const clearAllTasks = () =>{
    setAllTodos([]);
  }

  const switchToTodo = () => { //кнопки переключения 
    setViewMode("todo");
  }
  
  const switchToCompleted = () => {
    setViewMode("completed");
  }
  
  const taskCompleted = (taskId) => {
    const updatedTodos = allTodos.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
  
    setAllTodos(updatedTodos);
  };
  
  
  
  

  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input"> 
        
        <Input
          valueTitle={newTodoTitle}
          valueDescription={newDescription}
          onTitleChange={setNewTodoTitle}
          onDescriptionChange={setNewDescription}
        />

        <Button onclick={addNewTask} />

        </div>

        <div className="clear-wrapper">
          <Clear clear={clearAllTasks}/>

          <Switcher 
          switchToTodo={switchToTodo}      
          switchToCompleted={switchToCompleted}
          viewMode={viewMode} />
        </div>
  
        <div className="todo-list">
          {viewMode === "todo" ? (
              todoTasks.map((item, index) => (
              <Todoitem
              todoTitle={item.title}
              todoDescription={item.description}
              deleteTask={deleteTask}
              id={item.id}
              taskCompleted={taskCompleted}
              completed={item.completed}
              />
            ))
          ) : (
            completedTasks.map((item, index) => (
              <Todoitem
              todoTitle={item.title}
              todoDescription={item.description}
              deleteTask={deleteTask}
              id={item.id}
              taskCompleted={taskCompleted}
              completed={item.completed}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;