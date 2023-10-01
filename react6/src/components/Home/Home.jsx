// import React, { useState } from "react";
// import './style.sass'
// import CountryForm from "./../CountryForm/CountryForm"
// import CountryList from "./../CountryList/CountryList"
//
// export const countries = [
//     {
//         flag: `🇺🇦`,
//         country: `Ukraine`,
//         capital: 'Kyiv',
//         translations: ['ara', 'bre', 'ces'],
//     },
//     {
//         flag: `🇳🇴`,
//         country: `Norway`,
//         capital: 'Oslo',
//         translations: ['fra', 'hrv', 'hun'],
//     },
//     {
//         flag: `🇨🇦`,
//         country: `Canada`,
//         capital: 'Ottawa',
//         translations: ['ita', 'jpn', 'kor', 'nid'],
//     },
//     {
//         flag: `🇵🇬`,
//         country: `Papua New Guinea`,
//         capital: 'Port Moresby',
//         translations: ['hun', 'ita', 'por', 'sik'],
//     },
// ];
//
// export default function Home() {
//     const [countriesList, setCountriesList] = useState(countries);
//
//     const handleDelete = (index) => {
//         const updatedList = [...countriesList];
//         updatedList.splice(index, 1);
//         setCountriesList(updatedList);
//     };
//
//     return (
//         <>
//             <h3><text>Home Component 🏡</text></h3>
//             <CountryForm countries={countriesList} onFormSubmit={handleDelete} />
//             <CountryList countries={countriesList} onDelete={handleDelete} />
//         </>
//     );
// }

import React from "react";
import './style.sass'

export default function Home() {
    return <h3><text>Home Component 🏡</text></h3>;
}