import { fromJS } from 'immutable';
import {
  GET_USER,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  GET_USERS,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
} from './constants';

const initialState = fromJS({
  user: {},
  getUserLoading: false,
  userLoaded: false,
  getUserError: null,
  users: [],
  getUsersLoading: false,
  usersLoaded: false,
  getUsersError: null,
  linkToNext: '',
});

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return state
        .set('user', {})
        .set('getUserLoading', true)
        .set('userLoaded', false)
        .set('getUserError', null);
    case GET_USER_SUCCESS:
      return state
        .set('user', action.payload.data)
        .set('getUserLoading', false)
        .set('userLoaded', true)
        .set('getUserError', null);
    case GET_USER_ERROR:
      return state
        .set('getUserLoading', false)
        .set('userLoaded', false)
        .set('getUserError', action.payload);
    case GET_USERS:
      return state
        .set('users', [])
        .set('linkToNext', '')
        .set('getUsersLoading', true)
        .set('usersLoaded', false)
        .set('getUsersError', null);
    case GET_USERS_SUCCESS:
      return state
        .set('users', action.payload.data)
        .set('linkToNext', action.payload.headers.link)
        .set('getUsersLoading', false)
        .set('usersLoaded', true)
        .set('getUsersError', null);
    case GET_USERS_ERROR:
      return state
        .set('users', [])
        .set('linkToNext', '')
        .set('getUsersLoading', false)
        .set('usersLoaded', false)
        .set('getUsersError', action.payload);
    default:
      return state;
  }
};

export default AppReducer;
