import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function CountryForm({capitals, translations}) {
    const [selectedCapital, setSelectedCapital] = useState('');
    const [selectedTranslation, setSelectedTranslation] = useState('');
    const navigate = useNavigate();

    const handleCapitalChange = (e) => {
        setSelectedCapital(e.target.value);
    };

    const handleTranslationChange = (e) => {
        setSelectedTranslation(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const countryName = capitals.find((capital) => capital[0] === selectedCapital)[1];
        const redirectURL = `/countries/${countryName}?translation=${selectedTranslation}`;
        navigate(redirectURL);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="capitalSelect">Виберіть столицю країни:</label>
                <select id="capitalSelect" onChange={handleCapitalChange} value={selectedCapital}>
                    <option value="">Оберіть столицю</option>
                    {capitals.map(([code, capital]) => (
                        <option key={code} value={code}>
                            {capital}
                        </option>
                    ))}
                </select>
            </div>
            {selectedCapital && (
                <div>
                    <label htmlFor="translationSelect">Виберіть мову перекладу:</label>
                    <select id="translationSelect" onChange={handleTranslationChange} value={selectedTranslation}>
                        <option value="">Оберіть мову перекладу</option>
                        {translations.map((translation) => (
                            <option key={translation} value={translation}>
                                {translation}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            {selectedCapital && selectedTranslation && (
                <div>
                    <p>Вибрана країна: {capitals.find((capital) => capital[0] === selectedCapital)[1]}</p>
                    <button type="submit">Read more</button>
                </div>
            )}
        </form>
    );
}