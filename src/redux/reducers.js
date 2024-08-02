// import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './actions';
import { combineReducer } from 'redux';

const initialContactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const intialFilterState = '';

//reducers depends on how many domain meron ka(ex. contacts,filter)
export const contactsReducer = (state = initialContactsState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};
export const filterReducer = (state = intialFilterState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};
// need to make it in root reducer
