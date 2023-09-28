import React from "react";
import { Link } from "react-router-dom";

export default function CountryList({ countries, onDelete }) {
    return (
        <div>
            <h3>Country List</h3>
            <ul>
                {countries.map((country, index) => (
                    <li key={index}>
                        {country.country} - <Link to={`/countries/${index}`}>Read more</Link>
                        <button onClick={() => onDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}