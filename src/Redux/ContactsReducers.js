import * as contactActions from './ContactsActions';
const { createReducer, combineReducers } = require("@reduxjs/toolkit");


const items = createReducer([], {
    [contactActions.fetchContactsSuccess]: (_, action) => action.payload
});

const isLoading = createReducer(false, {
    [contactActions.fetchContactsRequest]: () => true,
    [contactActions.fetchContactsSuccess]: () => false,
    [contactActions.fetchContactsError]: () => false,
});

const error = createReducer(null, {
    [contactActions.fetchContactsError]: (_, action) => action.payload
})

export default combineReducers({
    items,
    isLoading,
    error,
})