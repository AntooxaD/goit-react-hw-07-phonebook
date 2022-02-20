import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { Title, Text } from './components/Styled/Styled';
import { useSelector } from 'react-redux';
import { getContacts } from './redux/selectors';

function App() {
    const contacts = useSelector(getContacts);
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
