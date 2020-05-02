import * as actions from '../actions/actionTypes';

const initialState = {
  error: null,
  ufList: [],
  location: {
    city: '',
    state: '',
    country: 'br'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_UFLIST_SUCCESS:
      return {
        ...state,
        ufList: action.ufList
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
          // new props
        }
      };

    default:
      return state;
  }
};
