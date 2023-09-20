import React from 'react'

import {useNavigate} from 'react-router-dom'

import CountryItem from '../components/TodoItem/CountryItem'

export default function RouteCountryItem() {
    const navigation = useNavigate();

    return (
        <>
            <CountryItem />
            <hr></hr>
            <button onClick={() => navigation(`/todo`)}>Back to Countries</button>
        </>
    )
}