import * as actions from './actionTypes';
import { fetchUf, fetchWeather } from '../../helpers/fetch-data';

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

export const updateLocation = (location) => ({
  type: actions.UPDATE_LOCATION,
  location
});

export const fetchWeatherFail = (error) => ({
  type: actions.LOAD_UFLIST_FAIL,
  error
});

export const fetchWeatherSuccess = (data) => ({
  type: actions.LOAD_UFLIST_FAIL,
  weather: data
});

export const fetchWeatherHandler = (location) => async (dispatch) => {
  try {
    const data = await fetchWeather(location);
    dispatch(fetchWeatherFail(data));
  } catch (error) {
    dispatch(fetchWeatherFail(error));
  }
};
