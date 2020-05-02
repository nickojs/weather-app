import * as actions from '../actions/actionTypes';

const initialState = {
  error: null,
  ufList: [],
  location: {
    city: '',
    state: '',
    country: 'br'
  },
  loadingWeather: false,
  weather: {}
};

const loadUfListSuccess = (state, action) => ({
  ...state,
  ufList: action.ufList,
  error: null
});

const loadUfListFail = (state, action) => ({
  ...state,
  error: action.error
});

export const updateLocation = (state, action) => ({
  ...state,
  location: {
    ...state.location,
    ...action.location
  }
});

export const fetchWeatherInit = (state, action) => ({
  ...state,
  loadingWeather: true
});

export const fetchWeatherSuccess = (state, action) => ({
  ...state,
  weather: action.weather,
  loadingWeather: false
});

export const fetchWeatherFail = (state, action) => ({
  ...state,
  error: action.error,
  loadingWeather: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_UFLIST_SUCCESS: return loadUfListSuccess(state, action);
    case actions.LOAD_UFLIST_FAIL: return loadUfListFail(state, action);
    case actions.UPDATE_LOCATION: return updateLocation(state, action);
    case actions.FETCH_WEATHER_INIT: return fetchWeatherInit(state, action);
    case actions.FETCH_WEATHER_SUCCESS: return fetchWeatherSuccess(state, action);
    case actions.FETCH_WEATHER_FAIL: return fetchWeatherFail(state, action);
    default: return state;
  }
};
