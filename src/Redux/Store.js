import { configureStore } from '@reduxjs/toolkit'
import {contactsReducer} from './ContactsSlice'
import { contactsApi } from './CreateApi'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), contactsApi.middleware]
})

