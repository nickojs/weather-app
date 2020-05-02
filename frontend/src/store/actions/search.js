import * as actions from './actionTypes';

export const loadUfListSuccess = (ufList) => {
  return {
    type: actions.LOAD_UFLIST_SUCCESS,
    ufList
  }
};

export const loadUfListFail = (error) => {
  return {
    type: actions.LOAD_UFLIST_FAIL,
    error
  }
};
