import * as actions from './actionTypes';
import { fetchUf, dealWithIt } from '../../helpers/fetch-data';

export const loadUfListInit = () => ({
  type: actions.LOAD_UF_INIT
});
export const loadUfListSuccess = (ufList) => ({
  type: actions.LOAD_UFLIST_SUCCESS,
  ufList
});

export const loadUfListFail = (error) => ({
  type: actions.LOAD_UFLIST_FAIL,
  error
});

export const loadUfList = () => async (dispatch) => {
  dispatch(loadUfListInit());
  try {
    const data = await fetchUf();
    dispatch(loadUfListSuccess(data));
  } catch (error) {
    const errorType = dealWithIt(error);
    dispatch(loadUfListFail(errorType));
  }
};

export const updateLocation = (location) => ({
  type: actions.UPDATE_LOCATION,
  location
});
