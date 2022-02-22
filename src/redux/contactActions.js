import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../service/api';

export const fetchContact = createAsyncThunk(
    'contacts/get',
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
    'contacts/add',
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
    'contacts/delete',
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
