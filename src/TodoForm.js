import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './features/todoSlice'; // Import addTodo action

const TodoForm = () => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState('');

    const handleChange = event => {
        setInputText(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (inputText.trim() === '') return;
        dispatch(addTodo(inputText)); // Dispatch addTodo action with the input text
        setInputText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new todo"
                value={inputText}
                onChange={handleChange}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
