import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
// import { ContactListItem } from '../ContactListItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.contactList}>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
            <button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
// export const ContactList = ({ contacts, deleteContact }) => {
//   return (
//     <div className={css.contactList}>
//       <ul>
//         {contacts.map(contact => (
//           <ContactListItem
//             key={contact.id}
//             contact={contact}
//             deleteContact={deleteContact}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };
