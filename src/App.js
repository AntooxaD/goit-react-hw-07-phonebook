import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { Title, Text } from './components/Styled/Styled';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from './redux/selectors';
import { useEffect } from 'react';
import { fetchContact } from './redux/contactActions';

function App() {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchContact()), [dispatch]);
    return (
        <div className="App">
            <Title>Phonebook</Title>
            <ContactForm />
            <Title>Contacts</Title>
            <Filter />
            {contacts.length ? (
                <ContactList contacts={contacts} />
            ) : (
                <Text>Nothing</Text>
            )}
        </div>
    );
}

export default App;
