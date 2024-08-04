import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.ulBox}>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          filteredContact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from '../../redux/contactsSlice';
// // import { ContactListItem } from '../ContactListItem';
// import css from './ContactList.module.css';

// export const ContactList = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(state => state.contacts.contacts);
//   const filter = useSelector(state => state.contacts.filter);
//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className={css.contactList}>
//       <ul>
//         {filteredContacts.map(contact => (
//           <li key={contact.id}>
//             {contact.name} - {contact.number}
//             <button onClick={() => dispatch(deleteContact(contact.id))}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactList;
