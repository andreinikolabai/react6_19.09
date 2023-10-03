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
            // Встановлюємо обрану столицю за замовчуванням
            setSelectedCapital(todo.state.countries[0].capital);

            // Знаходимо обрану країну за столицею і встановлюємо її
            const defaultSelectedCountry = todo.state.countries.find((country) => country.capital === todo.state.countries[0].capital);
            setSelectedCountry(defaultSelectedCountry);

            // Встановлюємо обрану мову за замовчуванням
            setSelectedTranslation(defaultSelectedCountry.translations[0]);
        }
    }, [todo.state.countries]);

    const handleCapitalChange = (event) => {
        const selectedCapital = event.target.value;
        setSelectedCapital(selectedCapital);
        const selectedCountryObj = todo.state.countries.find((country) => country.capital === selectedCapital);
        setSelectedCountry(selectedCountryObj);
    };

    const handleTranslationChange = (event) => {
        const selectedTranslation = event.target.value;
        setSelectedTranslation(selectedTranslation);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

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
                    {selectedCountry && selectedCountry.translations.map((translation) => (
                        <option key={translation} value={translation}>
                            {translation}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <button>
                    Read more about {selectedCountry ? selectedCountry.country : 'the Country'}
                </button>
            </div>
        </form>
    );
}