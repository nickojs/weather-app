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
  loadingUf: false,
  weather: null
};

const loadUfListInit = (state, action) => ({
  ...state,
  loadingUf: true
});

const loadUfListSuccess = (state, action) => ({
  ...state,
  ufList: action.ufList,
  error: null,
  loadingUf: false
});

const loadUfListFail = (state, action) => ({
  ...state,
  error: action.error,
  loadingUf: false
});

const updateLocation = (state, action) => ({
  ...state,
  location: {
    ...state.location,
    ...action.location
  }
});

const fetchWeatherInit = (state, action) => ({
  ...state,
  loadingWeather: true,
  weather: null,
  error: null
});

const fetchWeatherSuccess = (state, action) => ({
  ...state,
  weather: action.weather,
  loadingWeather: false
});

const fetchWeatherFail = (state, action) => ({
  ...state,
  error: action.error,
  loadingWeather: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_UF_INIT: return loadUfListInit(state, action);
    case actions.LOAD_UFLIST_SUCCESS: return loadUfListSuccess(state, action);
    case actions.LOAD_UFLIST_FAIL: return loadUfListFail(state, action);
    case actions.UPDATE_LOCATION: return updateLocation(state, action);
    case actions.FETCH_WEATHER_INIT: return fetchWeatherInit(state, action);
    case actions.FETCH_WEATHER_SUCCESS: return fetchWeatherSuccess(state, action);
    case actions.FETCH_WEATHER_FAIL: return fetchWeatherFail(state, action);
    default: return state;
  }
};
