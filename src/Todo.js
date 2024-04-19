import React, { useState } from 'react'; // Import useState hook
import { useSelector, useDispatch } from 'react-redux';
import { removeOne, clearTodo, addTodo } from './features/todoSlice'; // Import addTodo, removeOne, and clearTodo actions

function Todo() {
    const items = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState(''); // Local state for input text

    const renderItems = items.map((item, index) => (
        <li key={index} onClick={() => dispatch(removeOne(index))}>
            {item}
        </li>
    ));

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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a new todo"
                    value={inputText}
                    onChange={handleChange}
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>{renderItems}</ul>
            <button onClick={() => dispatch(clearTodo())}>Clear</button>
        </div>
    );
}

export default Todo;
