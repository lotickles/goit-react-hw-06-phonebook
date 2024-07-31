// import { createStore } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from 'redux';
import { contactsSlice } from '../redux/contactsSlice';
import { filterSlice } from '../redux/filterSlice.js';
import { persistStore, persistReducer } from 'redux-persist';
import { storage } from 'redux-persist/lib/storage'; //default localstorage for web

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

const persistConfig = {
  key: 'root', // The key property uniquely identifies the persisted state in the storage.
  storage, // The storage property specifies the underlying storage engine where the state will be persisted.
  whitelist: ['contacts'], // In your case, you probably only want to persist contacts
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store with persited reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
