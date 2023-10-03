import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TodoContext from "./../../contexts/todoContext";

export default function CountryItem() {
    const navigation = useNavigate();
    const { id } = useParams();
    const { state, handleItemDelete } = useContext(TodoContext);

    const [countryData, setCountryData] = useState(null);
    const [countryName, setCountryName] = useState(""); // Додайте стейт для збереження назви країни

    useEffect(() => {
        const selectedCountry = state.countries.find(item => item.id === +id);
        if (selectedCountry) {
            setCountryData(selectedCountry);
            setCountryName(selectedCountry.country); // Збереження назви країни в стейт
        }
    }, [id, state.countries]);

    const handleDelete = (id) => {
        handleItemDelete(id);
        navigation(`/todo`);
    };

    return countryData ? (
        <div>
            <h2>{countryName}</h2>
            <ul>
                {Object.keys(countryData).map((key, index) => (
                    <li key={index}>
                        {key}: {String(countryData[key])}
                    </li>
                ))}
            </ul>
            <button onClick={() => handleDelete(countryData.id)}>Delete item</button>
        </div>
    ) : null;
}