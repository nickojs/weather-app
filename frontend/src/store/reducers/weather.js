import * as actions from '../actions/actionTypes';

const initialState = {
  weather: null,
  loading: false,
  error: null
};

const fetchWeatherInit = (state, action) => ({
  ...state,
  loading: true,
  weather: null,
  error: null
});

const fetchWeatherSuccess = (state, action) => ({
  ...state,
  weather: action.weather,
  loading: false
});

const fetchWeatherFail = (state, action) => ({
  ...state,
  error: action.error,
  loading: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_WEATHER_INIT: return fetchWeatherInit(state, action);
    case actions.FETCH_WEATHER_SUCCESS: return fetchWeatherSuccess(state, action);
    case actions.FETCH_WEATHER_FAIL: return fetchWeatherFail(state, action);
    default: return state;
  }
};
