//action types =domain/action
//describing the nature/what happens
export const ADD_CONTACT = 'contacts/addcontacts';
export const DELETE_CONTACT = 'contacts/deleteContacts';
export const SET_FILTER = 'contacts/setFilter';

//action generators
//will show the HOW the action of the objects

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});
export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});
export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter,
});
