import { BtnDelete, List, ListItem } from '../Styled/Styled';
import { useDispatch, useSelector } from 'react-redux';
import { delContact } from '../../redux/contactActions';
import { getVisibleContacts } from '../../redux/selectors';

function ContactList() {
    const dispatch = useDispatch();
    const onDelete = id => dispatch(delContact(id));
    const contacts = useSelector(getVisibleContacts);

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
