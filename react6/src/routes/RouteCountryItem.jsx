import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CountryItem from '../components/CountryItem/CountryItem';

export default function RouteCountryItem() {
    const navigation = useNavigate();
    const { id } = useParams();

    return (
        <>
            <CountryItem id={id} />
            <br></br>
            <button onClick={() => navigation(`/todo`)}>Back to Countries</button>
        </>
    );
}