import { useReducer } from "react";

const useTodo = () => {
    const INITIAL_STATE = {
        countries: [
            {
                userId: 1,
                id: 1,
                Flag: `🇺🇦`,
                Country: `Ukraine`,
                Capital: 'Kyiv',
                Translations: ['ara', 'bre', 'ces'],
            },
            {
                userId: 2,
                id: 2,
                Flag: `🇳🇴`,
                Country: `Norway`,
                Capital: 'Oslo',
                Translations: ['fra', 'hrv', 'hun'],
            },
            {
                userId: 3,
                id: 3,
                Flag: `🇨🇦`,
                Country: `Canada`,
                Capital: 'Ottawa',
                Translations: ['ita', 'jpn', 'kor', 'nid'],
            },
            {
                userId: 4,
                id: 4,
                Flag: `🇵🇬`,
                Country: `Papua New Guinea`,
                Capital: 'Port Moresby',
                Translations: ['hun', 'ita', 'por', 'sik'],
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