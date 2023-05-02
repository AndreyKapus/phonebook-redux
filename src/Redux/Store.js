import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './ContactsReducers'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer
  },
})

