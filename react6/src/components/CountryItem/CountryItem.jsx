import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TodoContext from "./../../contexts/todoContext";

export default function CountryItem() {
    const navigation = useNavigate();
    const { id } = useParams();
    const { state, handleItemDelete } = useContext(TodoContext);

    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        const selectedCountry = state.countries.find(item => item.id === +id);
        setCountryData(selectedCountry);
    }, [id, state.countries]);

    const handleDelete = (id) => {
        handleItemDelete(id);
        navigation(`/todo`);
    };

    return countryData ? (
        <div>
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