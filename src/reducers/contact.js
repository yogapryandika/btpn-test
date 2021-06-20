import {
  ADD_CONTACT,
  GET_CONTACT,
  GET_DETAIL_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACT,
  SET_ERROR,
  SET_LOADING_DATA,
  SET_LOADING_UPDATE,
  SET_LOADING_DETAIL,
  SET_LOADING_DELETE,
  SET_LOADING_CREATE
} from '../types/contactTypes'

const initialState = {
  contacts: null,
  current: null,
  loading: {
    update: false,
    getData: false,
    getDetail: false,
    addData: false,
    delete: false
  },
  error: null,
}

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        loading: {
          ...state.loading,
          addData: false
        }
      };
    case GET_CONTACT:
      return {
        ...state,
        contacts: action.payload,
        loading: {
          ...state.loading,
          getData: false
        }
      }
    case GET_DETAIL_CONTACT:
      return {
        ...state,
        current: action.payload,
        loading: {
          ...state.loading,
          getDetail: false
        }
      }
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
        current: action.payload,
        loading: {
          ...state.loading,
          update: false
        }
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
        loading: {
          ...state.loading,
          delete: false
        }
      }
    case FILTER_CONTACT:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return contact.name.match(regex)
        })
      }
    case SET_ERROR:
      console.error(action.payload)
      return {
        ...state,
        error: action.payload,
      }
    case SET_LOADING_DATA:
      return {
        ...state,
        loading: {
          ...state.loading,
          getData: true
        }
      }
    case SET_LOADING_UPDATE:
      return {
        ...state,
        loading: {
          ...state.loading,
          update: true
        }
      }
    case SET_LOADING_DETAIL:
      return {
        ...state,
        loading: {
          ...state.loading,
          getDetail: true
        }
      }
    case SET_LOADING_DELETE:
      return {
        ...state,
        loading: {
          ...state.loading,
          delete: true
        }
      }
    case SET_LOADING_CREATE:
      return {
        ...state,
        loading: {
          ...state.loading,
          addData: true
        }
      }

    default:
      return state;
  }
}
