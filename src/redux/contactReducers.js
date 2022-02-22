import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import {
    addNewContact,
    delContact,
    filterContact,
    fetchContact,
} from './contactActions';

const items = createReducer([], {
    [fetchContact.fulfilled]: (_, action) => action.payload,
    [addNewContact.fulfilled]: (state, { payload }) =>
        state.find(({ name }) => name === payload.name)
            ? alert(`${payload.name} is already in contacts`)
            : [...state, payload],
    [delContact.fulfilled]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
    [filterContact]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({ items, filter });

export default contactsReducer;
