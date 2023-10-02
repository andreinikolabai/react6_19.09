import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import TodoContext from "../../contexts/todoContext";

export default function CountryForm() {
    const { state } = useContext(TodoContext);
    const [selectedCapital, setSelectedCapital] = useState("");
    const [selectedTranslation, setSelectedTranslation] = useState("");
    const navigate = useNavigate();

    // Функція для генерації опцій для вибору столиці
    const renderCapitalOptions = () => {
        return state.todo.map((country) => (
            <option key={country.id} value={country.capital}>
                {country.flag} {country.capital}
            </option>
        ));
    };

    // Функція для генерації опцій для вибору мови перекладу
    const renderTranslationOptions = () => {
        const selectedCountry = state.todo.find(
            (country) => country.capital === selectedCapital
        );
        if (selectedCountry) {
            return selectedCountry.translations.map((translation) => (
                <option key={translation} value={translation}>
                    {translation}
                </option>
            ));
        }
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedCapital && selectedTranslation) {
            const selectedCountry = state.todo.find(
                (country) => country.capital === selectedCapital
            );
            navigate(
                `/countries/${selectedCountry.country}?translation=${selectedTranslation}`
            );
        }
    };

    return (
        <div>
            <h3>Country Form Component</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="capitalSelect">Select a capital:</label>
                    <select
                        id="capitalSelect"
                        value={selectedCapital}
                        onChange={(e) => setSelectedCapital(e.target.value)}
                    >
                        <option value="">Select a capital</option>
                        {renderCapitalOptions()}
                    </select>
                </div>
                {selectedCapital && (
                    <div>
                        <label htmlFor="translationSelect">Select a translation:</label>
                        <select
                            id="translationSelect"
                            value={selectedTranslation}
                            onChange={(e) => setSelectedTranslation(e.target.value)}
                        >
                            <option value="">Select a translation</option>
                            {renderTranslationOptions()}
                        </select>
                    </div>
                )}
                {selectedCapital && selectedTranslation && (
                    <div>
                        <button> Read more about {selectedCapital} </button>
                    </div>
                )}
            </form>
        </div>
    );
}