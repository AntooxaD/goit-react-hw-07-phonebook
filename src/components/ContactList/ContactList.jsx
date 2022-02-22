import { BtnDelete, List, ListItem } from '../Styled/Styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/contactActions';
import { getContacts } from '../../Redux/selectors';

function ContactList() {
    const dispatch = useDispatch();
    const onDelete = id => dispatch(deleteContact(id));

    const contacts = useSelector(getContacts);

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
