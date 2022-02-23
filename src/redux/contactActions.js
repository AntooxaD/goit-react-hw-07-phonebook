import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../service/api';

export const fetchContact = createAsyncThunk('contacts/get', async () => {
    const contacts = await fetchContacts();
    return contacts;
});

export const addNewContact = createAsyncThunk('contacts/add', async payload => {
    const contact = await addContact(payload);
    return contact;
});

export const delContact = createAsyncThunk(
    'contacts/delete',
    async contactId => {
        await deleteContact(`${contactId}`);
        return contactId;
    },
);

export const filterContact = createAction('contacts/changeFilter');
