import {useReducer} from "react";

const useTodo = () => {
    const INITIAL_STATE = {
        todo: [
            {
                userId: 1,
                id: 1,
                flag: `🇺🇦`,
                country: `Ukraine`,
                capital: 'Kyiv',
                translations: ['ara', 'bre', 'ces'],
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

    // action types
    const ACTION_TODO_ITEM_DELETE = `ACTION_TODO_ITEM_DELETE`;

    // action
    const actionTodoItemDelete = (todoItemId) => ({
        type: ACTION_TODO_ITEM_DELETE,
        payload: todoItemId,
    });

    const reducer = (state = INITIAL_STATE, { type, payload }) => {
        switch (type) {
            case ACTION_TODO_ITEM_DELETE:
                return {
                    ...state,
                    todo: state.todo.filter((item) => item.id !== payload),
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