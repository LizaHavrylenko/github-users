import {
  GET_USERS,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
  GET_USER,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
} from './constants';

export const getUsers = data => ({
  type: GET_USERS,
  payload: data,
});

export const getUsersSuccess = data => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});

export const getUsersError = err => ({
  type: GET_USERS_ERROR,
  payload: err,
});

export const getUser = data => ({
  type: GET_USER,
  payload: data,
});

export const getUserSuccess = data => ({
  type: GET_USER_SUCCESS,
  payload: data,
});

export const getUserError = err => ({
  type: GET_USER_ERROR,
  payload: err,
});
