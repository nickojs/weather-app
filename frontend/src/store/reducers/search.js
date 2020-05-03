import * as actions from '../actions/actionTypes';

const initialState = {
  ufList: [],
  location: {
    city: '',
    state: '',
    country: 'br'
  },
  error: null,
  loading: false
};

const loadUfListInit = (state, action) => ({
  ...state,
  loading: true
});

const loadUfListSuccess = (state, action) => ({
  ...state,
  ufList: action.ufList,
  error: null,
  loading: false
});

const loadUfListFail = (state, action) => ({
  ...state,
  error: action.error,
  loading: false
});

const updateLocation = (state, action) => ({
  ...state,
  location: {
    ...state.location,
    ...action.location
  }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_UF_INIT: return loadUfListInit(state, action);
    case actions.LOAD_UFLIST_SUCCESS: return loadUfListSuccess(state, action);
    case actions.LOAD_UFLIST_FAIL: return loadUfListFail(state, action);
    case actions.UPDATE_LOCATION: return updateLocation(state, action);
    default: return state;
  }
};
