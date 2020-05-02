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

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_UFLIST_SUCCESS:
      return {
        ...state,
        ufList: action.ufList,
        error: null
      };

    case actions.LOAD_UFLIST_FAIL:
      return {
        ...state,
        error: action.error
      };

    case actions.UPDATE_LOCATION:
      return {
        ...state,
        location: {
          ...state.location,
          ...action.location
        }
      };

    case actions.FETCH_WEATHER_INIT:
      return {
        ...state,
        loadingWeather: true
      };

    case actions.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.weather,
        loadingWeather: false
      };

    case actions.FETCH_WEATHER_FAIL:
      return {
        ...state,
        error: action.error,
        loadingWeather: false
      };

    default:
      return state;
  }
};
