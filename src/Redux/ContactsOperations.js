import * as contactsApi from 'FetchContcts/FetchContacts'
// import * as contactActions from './ContactsActions'
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContacts = () => async dispatch => {
//     dispatch(contactActions.fetchContactsRequest())
    
//     try {
//         const contacts = await contactsApi.fetchContacts();
//         dispatch(contactActions.fetchContactsSuccess(contacts))
//     } catch(error) {
//         dispatch(contactActions.fetchContactsError(error));
//     }
// }

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try{
            const contacts = await contactsApi.fetchContacts();
            return contacts;
        } catch (error) {
        return rejectWithValue(error)
    }}
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (text, {rejectWithValue}) => {
        try {
            const item = await contactsApi.addContact(text)
            return item;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)