import { createSlice } from '@reduxjs/toolkit'

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },

      reducers: {
        addContact(state, action) {
          state.push(action.payload);
      },
    },
});

export const contactsReducer = contactsSlice.reducer;
export const {addContact} = contactsSlice.actions
 