import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts } from 'FetchContcts/FetchContacts';
import { fetchContacts, addContact } from './ContactsOperations';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },

     extraReducers: {
        
        [fetchContacts.fulfilled] (state, action) {
            state.isLoading = true;
           state.items = action.payload;
           state.isLoading = false;
        },
        
        [addContact.fulfilled] (state, action) {
            state.isLoading = true;
            state.items.push(action.payload)
        }
        // fetchFulfield(state, action) {
        //   state.isLoading = false;
        //   state.items = action.payload;
        // },
        // detchError(state, action) {
        //   state.isLoading = false;
        //   state.error = action.payload;
        // }
    },
});

export const contactsReducer = contactsSlice.reducer;
export const {fetchPending, fetchFulfield, detchError} = contactsSlice.actions
 