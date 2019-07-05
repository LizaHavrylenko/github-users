import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_USERS, GET_USER } from './constants';
import {
  getUsersSuccess,
  getUsersError,
  getUserSuccess,
  getUserError,
} from './actions';

const fetchUsers = page =>
  axios.get(`https://api.github.com/users?per_page=20&since=${page}`);

const fetchUser = username =>
  axios.get(`https://api.github.com/users/${username}`);

export function* getUsers(action) {
  try {
    const data = yield call(fetchUsers, action.payload);

    yield put(getUsersSuccess(data));
  } catch (err) {
    yield put(getUsersError(err.toString()));
  }
}

export function* getUser(action) {
  try {
    const data = yield call(fetchUser, action.payload);

    yield put(getUserSuccess(data));
  } catch (err) {
    yield put(getUserError(err.toString()));
  }
}

export default function* defaultSaga() {
  yield takeLatest(GET_USERS, getUsers);
  yield takeLatest(GET_USER, getUser);
}
