import React, { useContext } from "react";
import TodoContext from "../../contexts/todoContext";
import { Link } from 'react-router-dom'
import './style.sass'

export default function CountryList() {
    const { state, handleItemDelete } = useContext(TodoContext);

    const handleDelete = (id) => {
        handleItemDelete(id);
    };

    return state.countries.length ? (
        <div className="todo-list">
            <h3>Countries List</h3>
            <ul>
                {state.countries.map((item) => (
                    <li key={item.id}>
                        {item.Country}{" "}
                        <Link to={`${String(item.id)}?translation=eng`}>Read more</Link>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    ) : null;
}