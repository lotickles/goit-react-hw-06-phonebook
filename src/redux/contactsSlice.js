import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//set initialstate

const contactsSlice = createSlice({
  //slice name
  name: 'contacts',
  //initial state
  initialState: {
    initialContacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },

  //reducer
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.initialContacts.push(action.payload);
      },
      prepare: (name, number) => {
        return {
          type: 'contacts/addContact',
          payload: {
            id: nanoid(),
            name: name.trim(),
            number: number.trim(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      const index = state.initialContacts.findIndex(
        contact => contact.id === action.payload
      );
      state.initialContacts.splice(index, 1);
    },

    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};
export const contactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
//generators
export const { addContact, deleteContact, updateFilter } =
  contactsSlice.actions;

// export default contactsSlice.reducer;
//slice reducers
// export const contactReducer = contactsSlice.reducer;
