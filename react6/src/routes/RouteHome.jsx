import React from 'react'

import Home from './../components/Home/Home'
import CountryForm from '../components/CountryForm/CountryForm';
import useTodo from "../hooks/useTodo";

export default function RouteHome() {
    const todo = useTodo();

    return (
        <>
            <Home />
            <br/>
            <CountryForm countries={todo.state.countries} />
        </>
    )
}
