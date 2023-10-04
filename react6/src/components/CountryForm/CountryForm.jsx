import React, { useState, useContext, useEffect } from 'react';
import './style.sass';
import { useNavigate } from 'react-router-dom';
import TodoContext from '../../contexts/todoContext';

export default function CountryForm() {
    const [selectedCapital, setSelectedCapital] = useState('');
    const [selectedTranslation, setSelectedTranslation] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const navigate = useNavigate();
    const todo = useContext(TodoContext);

    useEffect(() => {
        if (todo.state.countries && todo.state.countries.length > 0) {
            setSelectedCapital(todo.state.countries[0].Capital);

            const defaultSelectedCountry = todo.state.countries.find((country) => country.Capital === todo.state.countries[0].Capital);
            setSelectedCountry(defaultSelectedCountry);

            setSelectedTranslation(defaultSelectedCountry.Translations[0]);
        }
    }, [todo.state.countries]);

    const handleCapitalChange = (event) => {
        const selectedCapital = event.target.value;
        setSelectedCapital(selectedCapital);
        const selectedCountryObj = todo.state.countries.find((country) => country.Capital === selectedCapital);
        setSelectedCountry(selectedCountryObj);
    };

    const handleTranslationChange = (event) => {
        const selectedTranslation = event.target.value;
        setSelectedTranslation(selectedTranslation);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (selectedCountry) {
            navigate(`/countries/${selectedCountry.Country}?translation=${selectedTranslation}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h3>Capital Form Component</h3>
                <h4>Select Capital</h4>
                <select value={selectedCapital} onChange={handleCapitalChange}>
                    {todo.state.countries && todo.state.countries.map((country) => (
                        <option key={country.id} value={country.Capital}>
                            {`${country.Flag} ${country.Capital}`}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <h4>Select Translation Language:</h4>
                <select value={selectedTranslation} onChange={handleTranslationChange}>
                    {selectedCountry && selectedCountry.Translations.map((Translation) => (
                        <option key={Translation} value={Translation}>
                            {Translation}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <button>
                    Read more about {selectedCountry ? selectedCountry.Country : 'the Country'}
                </button>
            </div>
        </form>
    );
}