import { nanoid } from 'nanoid';

export const ADD_CONTACT = 'contacts/addContact';
export const DELETE_CONTACT = 'contacts/deleteContact';
export const SET_FILTER = 'filter/setFilter';

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: { id: nanoid(), name, number },
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const setFilter = value => ({
  type: SET_FILTER,
  payload: value,
});
