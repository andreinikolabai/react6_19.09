import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CountryList({ countries }) {
    const [countriesList, setCountriesList] = useState(countries);

    const handleDelete = (index) => {
        const updatedList = [...countriesList];
        updatedList.splice(index, 1);
        setCountriesList(updatedList);
    };

    return (
        <div>
            <h3>Country List</h3>
            <ul>
                {countriesList.map((country, index) => (
                    <li key={index}>
                        {country.country} - <Link to={`/countries/${index}`}>Read more</Link>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}