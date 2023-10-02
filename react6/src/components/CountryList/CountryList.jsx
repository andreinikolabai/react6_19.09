import React, { useContext } from "react";
import TodoContext from "../../contexts/todoContext";
import { Link } from 'react-router-dom'

export default function TodoList() {
    const { state, handleItemDelete } = useContext(TodoContext);

    return state.countries.length ? (
        <ul>
            {state.countries.map((item, index) => (
                <li key={item.id}>
                    {item.country}{" "}
                    <Link to={String(item.id)}>Read more</Link>
                    <button onClick={() => {
                        handleItemDelete(item.id);
                    }}>Delete</button>
                </li>
            ))}
        </ul>
    ) : null;
}