// import * as contactActions from './ContactsActions';


import { fetchContacts, addContact } from "./ContactsOperations";
const { createReducer, combineReducers } = require("@reduxjs/toolkit");

const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, action) => action.payload
});

const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
    [fetchContacts.rejected]: (_, action) => action.payload
});

export const add = createReducer({}, {
    [addContact.pending]: (state) => state.isLoading = true,
    [addContact.fulfilled]: (state, action) => state.contacts.items.push(action.payload),
    [addContact.rejected]: (state) => state.isLoading = false,
})

export default combineReducers({
    items,
    isLoading,
    error,
    add,
});

