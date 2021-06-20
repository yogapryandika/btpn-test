import {
  DELETE_CONTACT,
  EDIT_CONTACT,
  FILTER_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  GET_DETAIL_CONTACT,
  SET_ERROR,
  SET_LOADING_CREATE,
  SET_LOADING_DATA,
  SET_LOADING_DELETE,
  SET_LOADING_DETAIL,
  SET_LOADING_UPDATE,
} from '../types/contactTypes'

import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL

export const getContacts = () => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING_DATA
    })

    const res = await axios.get(`${baseURL}/contact`)
    dispatch({
      type: GET_CONTACT,
      payload: res.data.data
    })

  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.message
    })
  }
}

export const getContactsDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING_DETAIL
    })

    const res = await axios.get(`${baseURL}/contact/${id}`)
    dispatch({
      type: GET_DETAIL_CONTACT,
      payload: res.data.data
    })
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.message
    })
  }
}

export const updateContacts = ({ id, firstName, lastName, photo, age }) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING_UPDATE
    })

    const res = await axios.put(`${baseURL}/contact/${id}`, { firstName, lastName, photo, age })

    dispatch({
      type: EDIT_CONTACT,
      payload: res.data.data
    })

  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.message
    })
  }
}

export const deleteContacts = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING_DELETE
    })

    await axios.delete(`${baseURL}/contact/${id}`)

    dispatch({
      type: DELETE_CONTACT,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.message
    })
  }
}

export const addContacts = ({ firstName, lastName, photo, age }) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADING_CREATE
    })

    const res = axios.post(`${baseURL}/contact`, { firstName, lastName, photo, age })

    dispatch({
      type: ADD_CONTACT,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.message
    })

  }
}

