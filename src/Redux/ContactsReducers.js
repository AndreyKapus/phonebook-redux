// import * as contactActions from './ContactsActions';
import { fetchContacts } from "./ContactsOperations";
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
})

export default combineReducers({
    items,
    isLoading,
    error,
})