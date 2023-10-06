import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TodoContext from "./../../contexts/todoContext";

export default function CountryItem(props) {
    const navigation = useNavigate();
    const { id } = props;
    const { state, handleItemDelete } = useContext(TodoContext);

    const [countryData, setCountryData] = useState(null);
    const [selectedTranslation, setSelectedTranslation] = useState('');

    useEffect(() => {
        const selectedCountry = state.countries.find(item => item.id === +id);
        setCountryData(selectedCountry);
        setSelectedTranslation(new URLSearchParams(window.location.search).get('translation') || 'ara');
    }, [id, state.countries]);

    const handleDelete = (id) => {
        handleItemDelete(id);
        navigation(`/todo`);
    };

    if (!countryData) {
        return null; // Повернути нуль, якщо countryData ще не завантажено
    }

    const translatedName = countryData.Translations[selectedTranslation]
        ? countryData.Translations[selectedTranslation].Common
        : countryData.Name[0].Common;

    return (
        <div>
            <h3>{translatedName}</h3>
            <ul>
                {Object.keys(countryData).map((key) => (
                    key !== 'id' && key !== 'userId' && key !== 'Country' ? (
                        <li key={key}>
                            {key === 'Name' ? (
                                <div>
                                    {key}:
                                    <ul>
                                        {countryData[key].map((name, nameIndex) => (
                                            <li key={nameIndex}>
                                                <ul>
                                                    <li>
                                                        Official: '{name.Official}';
                                                    </li>
                                                    <li>
                                                        Common: '{name.Common}';
                                                    </li>
                                                </ul>
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
                            ) : key === "Languages" ? (
                                <div>
                                    {key}:
                                    <ul>
                                        {Object.keys(countryData[key]).map((languageKey) => (
                                            <li key={languageKey}>
                                                {`${languageKey}: '${countryData[key][languageKey]}'`}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : key === "Translations" ? (
                                <div>
                                    {key}:
                                    <ul>
                                        {Object.keys(countryData[key]).map((translationKey, translationIndex) => (
                                            <li key={translationIndex}>
                                                {translationKey}:
                                                <ul>
                                                    <li>Official: '{countryData[key][translationKey].Official}';</li>
                                                    <li>Common: '{countryData[key][translationKey].Common}';</li>
                                                </ul>
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
                    ) : null
                ))}
            </ul>
            <button onClick={() => handleDelete(countryData.id)}>Delete item</button>
        </div>
    );
}