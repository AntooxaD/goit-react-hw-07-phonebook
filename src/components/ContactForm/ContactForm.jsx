import { useState } from 'react';
import { Form, Wrapper, SpanName, Input, Button } from '../Styled/Styled';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addNewContact } from '../../redux/contactActions';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';

function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameId = nanoid();
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const handleSubmit = e => {
        e.preventDefault();
        if (
            contacts.find(contact =>
                contact.name
                    .toLocaleLowerCase()
                    .includes(name.toLocaleLowerCase()),
            )
        ) {
            setName('');
            setNumber('');
            return alert(`${name} is already in contacts.`);
        }
        dispatch(addNewContact({ name, number }));
        reset();
    };

    function reset() {
        setName('');
        setNumber('');
    }

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                break;
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Wrapper>
                <SpanName>Name</SpanName>
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    id={nameId}
                    value={name}
                    onChange={handleChange}
                />
            </Wrapper>
            <Wrapper>
                Number
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                />
            </Wrapper>
            <Button type="submit">Add Contact</Button>
        </Form>
    );
}
export default ContactForm;
