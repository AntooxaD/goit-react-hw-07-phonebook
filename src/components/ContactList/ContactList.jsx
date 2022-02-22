import { BtnDelete, List, ListItem } from '../Styled/Styled';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { delContact } from '../../redux/contactActions';

function ContactList({ contacts }) {
    const dispatch = useDispatch();
    const onDelete = useCallback(id => dispatch(delContact(id)), [dispatch]);

    return (
        <List>
            {contacts.map(contact => (
                <ListItem key={contact.id}>
                    <p>
                        {contact.name}: <span>{contact.number}</span>
                    </p>
                    <BtnDelete
                        type="button"
                        onClick={() => {
                            onDelete(contact.id);
                        }}
                    >
                        Delete
                    </BtnDelete>
                </ListItem>
            ))}
        </List>
    );
}

export default ContactList;
