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

// import React, { useState } from "react";
// import './style.sass'
//
// export default function CountryForm({ countries, onFormSubmit }) {
//     const [selectedCapital, setSelectedCapital] = useState(countries[0].capital);
//     const [selectedTranslation, setSelectedTranslation] = useState(countries[0].translations[0]);
//     const selectedCountry = countries.find((country) => country.capital === selectedCapital);
//     const selectedCountryName = selectedCountry ? selectedCountry.country : "";
//
//     const handleCapitalChange = (e) => {
//         setSelectedCapital(e.target.value);
//     };
//
//     const handleTranslationChange = (e) => {
//         setSelectedTranslation(e.target.value);
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onFormSubmit(selectedCapital, selectedTranslation);
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <h3>Capital Form Component</h3>
//                 <label htmlFor="capitalSelect"></label>
//                 <h4>Select Country Capital:</h4>
//                 <select id="capitalSelect" onChange={handleCapitalChange} value={selectedCapital}>
//                     {countries.map((country, index) => (
//                         <option key={index} value={country.capital}>
//                             {`${country.flag} ${country.capital}`}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//             <div>
//                 <label htmlFor="translationSelect"></label>
//                 <h4>Select Translation Language:</h4>
//                 <select id="translationSelect" onChange={handleTranslationChange} value={selectedTranslation}>
//                     {selectedCountry &&
//                         selectedCountry.translations.map((translation, index) => (
//                             <option key={index} value={translation}>
//                                 {translation}
//                             </option>
//                         ))}
//                 </select>
//             </div>
//             <button type="submit">Read more about {selectedCountryName}</button>
//         </form>
//     );
// }