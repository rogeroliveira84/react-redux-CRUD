import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [
        'Tony Stark',
        'Bruce Lee',
        'Steve Jobs'
    ],
};

function clients(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_CLIENT':
            return { ...state, data: [...state.data, action.name] };
        default:
            return state;
    }
}

const store = createStore(clients);

export default store;
