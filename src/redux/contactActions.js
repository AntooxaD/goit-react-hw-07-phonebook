import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../service/api';
import { ActionType } from './actionsType';
export const fetchContact = createAsyncThunk(
    ActionType.ADD_CONTACT,
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await fetchContacts();
            return contacts;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const addNewContact = createAsyncThunk(
    ActionType.GET_CONTACTS,
    async (payload, { rejectWithValue }) => {
        try {
            const contact = await addContact(payload);
            return contact;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const delContact = createAsyncThunk(
    ActionType.DELETE_CONTACT,
    async (id, { rejectWithValue }) => {
        try {
            const contacts = await deleteContact(id);
            return contacts;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const filterContact = createAction('contacts/changeFilter');
