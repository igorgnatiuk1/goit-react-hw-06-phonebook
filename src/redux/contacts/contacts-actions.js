import { createAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const addContact = createAction('contacts/add', ({ name, number }) => ({
    payload: {
        id: v4(),
        name,
        number,
    },
}));
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };

// v1
// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: v4(),
//     name,
//     number,
//   },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });