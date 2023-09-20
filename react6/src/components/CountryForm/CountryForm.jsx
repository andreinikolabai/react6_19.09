import React, { useState } from "react";
import './style.sass'

export default function CountryForm({ countries, onFormSubmit }) {
    const [selectedCapital, setSelectedCapital] = useState(countries[0].capital);
    const [selectedTranslation, setSelectedTranslation] = useState(countries[0].translations[0]);
    const selectedCountry = countries.find((country) => country.capital === selectedCapital);
    const selectedCountryName = selectedCountry ? selectedCountry.country : "";

    const handleCapitalChange = (e) => {
        setSelectedCapital(e.target.value);
    };

    const handleTranslationChange = (e) => {
        setSelectedTranslation(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(selectedCapital, selectedTranslation);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h3>Capital Form Component</h3>
                <label htmlFor="capitalSelect"></label>
                <h4>Select Country Capital:</h4>
                <select id="capitalSelect" onChange={handleCapitalChange} value={selectedCapital}>
                    {countries.map((country, index) => (
                        <option key={index} value={country.capital}>
                            {`${country.flag} ${country.capital}`}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="translationSelect"></label>
                <h4>Select Translation Language:</h4>
                <select id="translationSelect" onChange={handleTranslationChange} value={selectedTranslation}>
                    {selectedCountry &&
                        selectedCountry.translations.map((translation, index) => (
                            <option key={index} value={translation}>
                                {translation}
                            </option>
                        ))}
                </select>
            </div>
            <button type="submit">Read more about {selectedCountryName}</button>
        </form>
    );
}