import * as actions from './actionTypes';
import { fetchUf } from '../../helpers/fetch-data';

export const loadUfListSuccess = (ufList) => ({
  type: actions.LOAD_UFLIST_SUCCESS,
  ufList
});

export const loadUfListFail = (error) => ({
  type: actions.LOAD_UFLIST_FAIL,
  error
});

export const loadUfList = () => async (dispatch) => {
  try {
    const data = await fetchUf();
    dispatch(loadUfListSuccess(data));
  } catch (error) {
    dispatch(loadUfListFail());
  }
};
