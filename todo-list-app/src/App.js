// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim() === '' || tasks.includes(task)) return;

        const newTasks = [...tasks, task].sort((a, b) => a.localeCompare(b));
        setTasks(newTasks);
        setTask('');
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };

    return ( <
        div className = "App" >
        <
        h1 > Todo List < /h1> <
        input type = "text"
        value = { task }
        onChange = { handleInputChange }
        onKeyPress = { handleKeyPress }
        placeholder = "Enter a new task" /
        >
        <
        button onClick = { addTask } > Add < /button> <
        ul > {
            tasks.map((task, index) => ( <
                li key = { index } > { task } <
                button onClick = {
                    () => deleteTask(index) } > Delete < /button> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default App;