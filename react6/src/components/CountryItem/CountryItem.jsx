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
            <h3>{countryData.Country}</h3>
            <ul>
                {Object.keys(countryData).map((key) => (
                    <li key={key}>
                        {key === 'Name' ? (
                            <div>
                                {key}:
                                <ul>
                                    {countryData[key].map((name, nameIndex) => (
                                        <li key={nameIndex}>
                                            <li>
                                                Official: '{name.Official}';
                                            </li>
                                            <li>
                                                Common: '{name.Common}';
                                            </li>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : key === 'Currencies' ? (
                            <div>
                                {key}:
                                <ul>
                                    {Object.keys(countryData[key]).map((currencyKey, currencyIndex) => (
                                        <li key={currencyIndex}>
                                            {currencyKey}:
                                            <ul>
                                                <li>
                                                    Name: '{countryData[key][currencyKey].Name}';
                                                </li>
                                                <li>
                                                    Symbol: '{countryData[key][currencyKey].Symbol}';
                                                </li>
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : key === 'Languages' ? (
                            <div>
                                {key}:
                                <ul>
                                    {Object.values(countryData[key]).map((language, languageIndex) => (
                                        <li key={languageIndex}>
                                            <div>
                                                Ukr: '{language.Ukr}';
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div>
                                {key}: {String(countryData[key])}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <button onClick={() => handleDelete(countryData.id)}>Delete item</button>
        </div>
    ) : null;
}