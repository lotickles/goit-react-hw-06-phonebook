import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

//set initialstate
const initialContactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  //slice name
  name: 'contacts',
  //initial state
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      if (
        state.find(contact => contact.name === action.payload.name) ===
        undefined
      ) {
        state.push(action.payload);
      }
    },
    deleteContact: (state, action) => {
      state.filter(contact => contact.id !== action.payload);
    },
  },
});
//generators
const { addContact, deleteContact } = contactSlice.actions;
//slice reducers
const contactReducer = contactSlice.reducer;
