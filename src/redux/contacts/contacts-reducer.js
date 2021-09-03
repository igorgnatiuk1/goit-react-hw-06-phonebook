import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
    [actions.addContact]: (state, action) => [...state, action.payload],
    [actions.deleteContact]: (state, action) => [
        ...state.filter(({ id }) => id !== action.payload),
    ],
});

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
});

// v1
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return [...state.filter(({ id }) => id !== payload)];

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'contacts/changeFilter':
//       return payload;

//     default:
//       return state;
//   }
// };