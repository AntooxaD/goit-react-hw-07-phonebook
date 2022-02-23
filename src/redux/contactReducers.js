import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import {
    addNewContact,
    delContact,
    filterContact,
    fetchContact,
} from './contactActions';

const items = createReducer([], {
    [fetchContact.fulfilled]: (_, { payload }) => payload,
    [addNewContact.fulfilled]: (state, { payload }) => [...state, payload],
    [delContact.fulfilled]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
    [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
