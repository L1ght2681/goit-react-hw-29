import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    deleteContact(state, action) {
      return state.filter(c => c.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;