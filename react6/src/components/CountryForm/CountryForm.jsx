import React, { useState, useEffect, useContext } from 'react';
import './style.sass';
import { useNavigate } from 'react-router-dom';
import TodoContext from '../../contexts/todoContext';

export default function CountryForm() {
    const [selectedCapital, setSelectedCapital] = useState('');
    const [selectedTranslation, setSelectedTranslation] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const navigate = useNavigate();
    const { state } = useContext(TodoContext);

    useEffect(() => {
        if (state.countries && state.countries.length > 0) {
            setSelectedCapital(state.countries[0].Capital);
            setSelectedCountry(state.countries.find((country) => country.Capital === state.countries[0].Capital));
            setSelectedTranslation('ara'); // Задаємо значення за замовчуванням для translation
        }
    }, [state.countries]);

    const handleCapitalChange = (event) => {
        const selectedCapital = event.target.value;
        setSelectedCapital(selectedCapital);
        const selectedCountryObj = state.countries.find((country) => country.Capital === selectedCapital);
        setSelectedCountry(selectedCountryObj);
    };

    const handleTranslationChange = (event) => {
        const selectedTranslation = event.target.value;
        setSelectedTranslation(selectedTranslation);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (selectedCountry) {
            navigate(`/todo/${selectedCountry.id}?translation=${selectedTranslation}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h3>Capital Form Component</h3>
                <h4>Select Capital</h4>
                <select value={selectedCapital} onChange={handleCapitalChange}>
                    {state.countries && state.countries.map((country) => (
                        <option key={country.id} value={country.Capital}>
                            {`${country.Flag} ${country.Capital}`}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <h4>Select Translation Language:</h4>
                <select value={selectedTranslation} onChange={handleTranslationChange}>
                    {selectedCountry && Object.keys(selectedCountry.Translations).map((key) => (
                        <option key={key} value={key}>
                            {key}
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