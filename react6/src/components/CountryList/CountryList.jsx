import React, { useContext } from "react";
import TodoContext from "../../contexts/todoContext";
import { Link } from 'react-router-dom'
import './style.sass'

export default function TodoList() {
    const { state, handleItemDelete } = useContext(TodoContext);

    return state.countries.length ? (
        <div>
            <h3>
                <text>Countries List</text>
            </h3>
            <ul className="todo-list">
                <div>
                    {state.countries.map((item, index) => (
                        <li key={item.id}>
                            {item.country}{" "}
                            <Link to={String(item.id)}>Read more</Link>
                            <button onClick={() => {
                                handleItemDelete(item.id);
                            }}>Delete
                            </button>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    ) : null;
}