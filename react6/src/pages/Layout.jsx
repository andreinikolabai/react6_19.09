import React from "react";

import Navigation from "./../components/Navigation/Navigation";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouteHome from "./../routes/RouteHome";
import RouteCountry from "../routes/RouteCountry";
import RouteCountryItem from "../routes/RouteCountryItem";

import useTodo from "./../hooks/useTodo";

import TodoContext from "../contexts/todoContext";

export default function Layout() {
    const todo = useTodo();

    return (
        <BrowserRouter>
            <header>
                <Navigation />
            </header>
            <main>
                <TodoContext.Provider value={todo}>
                    <Routes>
                        <Route index path={"/"} element={<RouteHome />}></Route>
                        <Route path={"todo"} element={<RouteCountry />}></Route>
                        <Route path={"todo/:id"} element={<RouteCountryItem />}></Route>
                    </Routes>
                </TodoContext.Provider>
            </main>
        </BrowserRouter>
    );
}