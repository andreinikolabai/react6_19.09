import { useReducer } from "react";

const useTodo = () => {
    const INITIAL_STATE = {
        countries: [
            {
                userId: 1,
                id: 1,
                Name: [
                    {
                        Official: 'Ukraine',
                        Common: 'Україна'
                    }
                    ],
                Currencies: [
                    {
                        Name: 'Ukrainian hryvnia',
                        Symbol: '₴'
                    }
                ],
                Capital: 'Kyiv',
                Region: 'Europe',
                Subregion: 'Eastern Europe',
                Languages: 'Ukr',
                Flag: `🇺🇦`,
                // country: `Ukraine`,
                Translations: ['ara', 'bre', 'ces'],
            },
            {
                userId: 2,
                id: 2,
                flag: `🇳🇴`,
                country: `Norway`,
                capital: 'Oslo',
                translations: ['fra', 'hrv', 'hun'],
            },
            {
                userId: 3,
                id: 3,
                flag: `🇨🇦`,
                country: `Canada`,
                capital: 'Ottawa',
                translations: ['ita', 'jpn', 'kor', 'nid'],
            },
            {
                userId: 4,
                id: 4,
                flag: `🇵🇬`,
                country: `Papua New Guinea`,
                capital: 'Port Moresby',
                translations: ['hun', 'ita', 'por', 'sik'],
            },
        ],
    };

    const ACTION_TODO_ITEM_DELETE = `ACTION_TODO_ITEM_DELETE`;

    const actionTodoItemDelete = (todoItemId) => ({
        type: ACTION_TODO_ITEM_DELETE,
        payload: todoItemId,
    });

    const reducer = (state = INITIAL_STATE, { type, payload }) => {
        switch (type) {
            case ACTION_TODO_ITEM_DELETE:
                return {
                    ...state,
                    countries: state.countries.filter((item) => item.id !== payload),
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const handleItemDelete = (id) => {
        dispatch(actionTodoItemDelete(id));
    };

    return { state, handleItemDelete };
};

export default useTodo;