import * as actions from './actionTypes';
import { fetchWeather, dealWithIt } from '../../helpers/fetch-data';

export const fetchWeatherInit = () => ({
  type: actions.FETCH_WEATHER_INIT
});

export const fetchWeatherFail = (error) => ({
  type: actions.FETCH_WEATHER_FAIL,
  error
});

export const fetchWeatherSuccess = (data) => ({
  type: actions.FETCH_WEATHER_SUCCESS,
  weather: data
});

export const fetchWeatherHandler = (location) => async (dispatch) => {
  dispatch(fetchWeatherInit());
  try {
    const data = await fetchWeather(location);
    dispatch(fetchWeatherSuccess(data));
  } catch (error) {
    const errorType = dealWithIt(error);
    dispatch(fetchWeatherFail(errorType));
  }
};
