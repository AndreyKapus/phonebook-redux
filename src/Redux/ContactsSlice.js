import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './ContactsOperations';

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
           state.isLoading = false;
        },

        [fetchContacts.rejected] (state, action) {
            state.error = action.payload.error;
        },

        [addContact.pending] (state, action) {
            state.isLoading = true;
        },
        
        [addContact.fulfilled] (state, action) {
            state.isLoading = false;
            state.items.push(action.payload);
            state.error = null;
        },

        [addContact.rejected] (state, action) {
            state.error = action.payload.error;
        }
    },
});

export const contactsReducer = contactsSlice.reducer;
export const {fetchPending, fetchFulfield, detchError} = contactsSlice.actions
 