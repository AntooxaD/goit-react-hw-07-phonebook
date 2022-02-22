import axios from 'axios';

axios.defaults.baseURL = 'https://620f415dec8b2ee28338fb33.mockapi.io';

export async function fetchContacts() {
    const { data } = await axios.get(`/contacts`);

    return data;
}
export async function addContact(contact) {
    const { data } = await axios.post(`/contacts`, contact);
    return data;
}
export async function deleteContact(id) {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
}
