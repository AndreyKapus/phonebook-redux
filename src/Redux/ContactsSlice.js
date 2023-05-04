import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './ContactsOperations';
// import { deleteContact } from 'FetchContcts/FetchContacts';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },

     extraReducers: {
        [fetchContacts.pending] (state) {
            state.isLoading = true;
        },
        
        [fetchContacts.fulfilled] (state, action) {
            state.isLoading = true;
           state.items = action.payload;
           state.error = null;
           state.isLoading = false;
        },

        [fetchContacts.rejected] (state, action) {
            state.error = action.payload.error;
        },

        [addContact.pending] (state) {
            state.isLoading = true;
        },
        
        [addContact.fulfilled] (state, action) {
            state.isLoading = false;
            state.items.push(action.payload);
            state.error = null;
        },

        [addContact.rejected] (state, action) {
            state.error = action.payload.error;
        },

        [deleteContact.pending] (state, action) {
            state.isLoading = true;
        },

        [deleteContact.fulfilled] (state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id
            );
            state.items.splice(index, 1)
        },

        [deleteContact.rejected] (state, action) {
            state.error = action.payload.error;
        },
    },
});

export const contactsReducer = contactsSlice.reducer;
// export const {fetchPending, fetchFulfield, fetchError} = contactsSlice.actions
 