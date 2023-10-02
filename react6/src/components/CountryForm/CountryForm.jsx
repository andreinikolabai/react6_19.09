import React, { useState, useContext, useEffect } from 'react';
import './style.sass';
import { useNavigate } from 'react-router-dom';
import TodoContext from '../../contexts/todoContext';

export default function CountryForm() {
    const [selectedCapital, setSelectedCapital] = useState('');
    const [selectedTranslation, setSelectedTranslation] = useState('');
    const navigate = useNavigate();
    const todo = useContext(TodoContext);

    // Установите начальные значения для selectedCapital и selectedTranslation
    useEffect(() => {
        if (todo.state.countries && todo.state.countries.length > 0) {
            setSelectedCapital(todo.state.countries[0].capital);
            setSelectedTranslation(todo.state.countries[0].translations[0]);
        }
    }, [todo.state.countries]);

    const handleCapitalChange = (event) => {
        const selectedCapital = event.target.value;
        setSelectedCapital(selectedCapital);
    };

    const handleTranslationChange = (event) => {
        const selectedTranslation = event.target.value;
        setSelectedTranslation(selectedTranslation);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedCountry = todo.state.countries.find(
            (country) => country.capital === selectedCapital
        );

        if (selectedCountry) {
            navigate(`/countries/${selectedCountry.country}?translation=${selectedTranslation}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h3>Capital Form Component</h3>
                <h4>Select Capital</h4>
                <select value={selectedCapital} onChange={handleCapitalChange}>
                    {todo.state.countries && todo.state.countries.map((country) => (
                        <option key={country.id} value={country.capital}>
                            {`${country.flag} ${country.capital}`}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <h4>Select Translation Language:</h4>
                <select value={selectedTranslation} onChange={handleTranslationChange}>
                    {selectedCapital && todo.state.countries.find((country) => country.capital === selectedCapital).translations.map((translation) => (
                        <option key={translation} value={translation}>
                            {translation}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <button>Read more about {selectedCapital}</button>
            </div>
        </form>
    );
}