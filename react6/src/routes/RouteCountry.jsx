import React from "react";
import CountryList from "../components/CountryList/CountryList";
import { countries } from "../components/Home/Home"; // Замініть на правильний шлях до Home.jsx

export default function RouteCountry() {
    return (
        <>
            <CountryList countries={countries} />
        </>
    );
}