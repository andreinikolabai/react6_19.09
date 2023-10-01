import React from 'react';
import CountryForm from "../components/CountryForm/CountryForm";
import useTodo from "./../hooks/useTodo"; // Импортируйте useTodo

export default function RouteForm() {
    const { state, handleItemDelete } = useTodo(); // Используйте useTodo

    return (
        <>
            <CountryForm countries={state.todo} onFormSubmit={handleItemDelete} />
        </>
    );
}