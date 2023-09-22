import React from "react";
import './style.sass'
import CountryForm from "./../CountryForm/CountryForm"

const countries = [
    {
        flag: `🇺🇦`,
        country: `Ukraine`,
        capital: 'Kyiv',
        translations: ['ara', 'bre', 'ces'],
    },
    {
        flag: `🇳🇴`,
        country: `Norway`,
        capital: 'Oslo',
        translations: ['fra', 'hrv', 'hun'],
    },
    {
        flag: `🇨🇦`,
        country: `Canada`,
        capital: 'Ottawa',
        translations: ['ita', 'jpn', 'kor', 'nid'],
    },
    {
        flag: `🇵🇬`,
        country: `Papua New Guinea`,
        capital: 'Port Moresby',
        translations: ['hun', 'ita', 'por', 'sik'],
    },
];

export default function Home() {
    return (
        <>
            <h3><text>Home Component 🏡</text></h3>
            <CountryForm countries={countries} />
        </>
    );
}