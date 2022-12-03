import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, fetchContacts, deleteContact } from "./operations";

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled
        , (state, action) => {
          state.isLoading = false;
          state.error = null;
          const index = state.contacts.items.findIndex(
            contact => contact.id === action.payload.id
          );
          state.contacts.items.splice(index, 1);
        })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      )
  }
})




export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

