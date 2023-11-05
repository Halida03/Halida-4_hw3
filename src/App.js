import React from "react";
import "./App.css";
import { useState } from "react";
import Input from "./Components/input";
import Button from "./Components/Button";
import Switcher from "./Components/switcher";
import Todoitem from "./Components/todoitem";


function App() {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [allTodos, setAllTodos] = useState([]);  //[] - для данных 

  const addNewTask = () => {
    if (newTodoTitle.trim() !== "") {
      const newTask = { newTodoTitle, newDescription };
      setAllTodos([...allTodos, newTask]);
      setNewTodoTitle("");
      setNewDescription("");
    }
  }

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

        <Switcher />
        <div className="todo-list">

        {
          allTodos.map((item, index) => (
          <Todoitem 
            key={index} 
            todoTitle={item.newTodoTitle} 
            todoDescription={item.newDescription} />
        ))}

        </div>
      </div>
    </div>
  );
}

export default App;