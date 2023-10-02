import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CountryForm({ countries }) {
    const [selectedCapital, setSelectedCapital] = useState('');
    const [selectedTranslation, setSelectedTranslation] = useState('');
    const navigate = useNavigate();

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
        const selectedCountry = countries.find(
            (country) => country.capital === selectedCapital
        );

        if (selectedCountry) {
            navigate(`/countries/${selectedCountry.country}?translation=${selectedTranslation}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Select a capital:</label>
                <select value={selectedCapital} onChange={handleCapitalChange}>
                    <option value="">Select a capital</option>
                    {countries && countries.map((country) => (
                        <option key={country.id} value={country.capital}>
                            {`${country.flag} ${country.capital}`}
                        </option>
                    ))}
                </select>
            </div>
            {selectedCapital && (
                <div>
                    <label>Select a translation:</label>
                    <select value={selectedTranslation} onChange={handleTranslationChange}>
                        <option value="">Select a translation</option>
                        {selectedCapital && countries.find((country) => country.capital === selectedCapital).translations.map((translation) => (
                            <option key={translation} value={translation}>
                                {translation}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            {selectedCapital && selectedTranslation && (
                <div>
                    <button>Read more about {selectedCapital}</button>
                </div>
            )}
        </form>
    );
}