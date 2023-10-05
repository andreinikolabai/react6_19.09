import { useReducer } from "react";

const useTodo = () => {
    const INITIAL_STATE = {
        countries: [
            {
                userId: 1,
                id: 1,
                Country: `Ukraine`,
                Name: [
                    {
                        Official: 'Ukraine',
                        Common: 'Україна',
                    },
                ],
                Currencies: {
                    Uah: {
                        Name: 'Ukrainian hryvnia',
                        Symbol: '₴',
                    },
                },
                Capital: 'Kyiv',
                Region: 'Europe',
                Subregion: 'Eastern Europe',
                Languages: {
                    Ukr: "Ukrainian",
                },
                Flag: `🇺🇦`,
                Translations: {
                    ara: {
                        Official: 'أوكرانيا',
                        Common: 'أوكرانيا',
                    },
                    bre: {
                        Official: 'Ukraina',
                        Common: 'Ukraina',
                    },
                    ces: {
                        Official: 'Ukrajina',
                        Common: 'Ukrajina',
                    },
                },
            },
            {
                userId: 2,
                id: 2,
                Country: `Norway`,
                Name: [
                    {
                        Official: 'Kingdom of Norway',
                        Common: 'Kongeriket Noreq',
                    },
                ],
                Currencies: {
                    Nok: {
                        Name: 'Norwegian krone',
                        Symbol: 'kr',
                    },
                },
                Region: 'Europe',
                Subregion: 'Nothern Europe',
                Capital: 'Oslo',
                Languages: {
                    Nno: 'Norwgian Nynorsk',
                    Nob: 'Norwgian Bokmai',
                    Smi: 'Sami',
                },
                Flag: `🇳🇴`,
                Translations: {
                    fra: {
                        Official: 'أRoyaume de Norvège',
                        Common: 'Norvège',
                    },
                    hrv: {
                        Official: 'Kraljevina Norveška',
                        Common: 'Norveška',
                    },
                    hun: {
                        Official: 'Norvég Királyság',
                        Common: 'Norvégia',
                    },
                },
            },
            {
                userId: 3,
                id: 3,
                Country: `Canada`,
                Name: [
                    {
                        Official: 'Canada',
                        Common: 'Canada',
                    },
                ],
                Currencies: {
                    Nok: {
                        Name: 'Canadian dollar',
                        Symbol: '$',
                    },
                },
                Region: 'Americas',
                Subregion: 'North America',
                Flag: `🇨🇦`,
                Capital: 'Ottawa',

                Languages: {
                        Eng: 'English',
                        Fra: 'French',
                    },
                Translations: {
                    ita: {
                        Official: 'Canada',
                        Common: 'Canada',
                    },
                    jpn: {
                        Official: 'カナダ',
                        Common: 'カナダ',
                    },
                    kor: {
                        Official: '캐나다',
                        Common: '캐나다',
                    },
                    nid: {
                        Official: 'Canada',
                        Common: 'Canada',
                    },
                },
            },
            {
                userId: 4,
                id: 4,
                Country: `Papua New Guinea`,
                Name: [
                    {
                        Official: 'Independent State of Papua New Guinea',
                        Common: 'Papua Niu Gini',
                    },
                ],
                Currencies: {
                    Nok: {
                        Name: 'Papua New Guinean kina',
                        Symbol: 'K',
                    },
                },
                Capital: 'Port Moresby',
                Region: 'Oceania',
                Subregion: 'Melanesia',
                Languages: {
                        Eng: 'English',
                        Hmo: 'Hiri Motu',
                        Tpi: 'Tok Pisin',
                    },
                Flag: `🇵🇬`,
                Translations: {
                    hun: {
                        Official: 'Független Pápua Új-Guinea állam',
                        Common: 'Pápua Új-Guinea',
                    },
                    ita: {
                        Official: 'Stato Indipendente di Papua Nuova Guinea',
                        Common: 'Papua Nuova Guinea',
                    },
                    por: {
                        Official: 'Estado Independente de Papua Nova Guiné',
                        Common: 'Papua Nova Guiné',
                    },
                    sik: {
                        Official: 'Jimbo Huru la Papua New Guinea',
                        Common: 'Papua Guinea Mpya',
                    },
                },
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