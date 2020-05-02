import * as actions from '../actions/actionTypes';

const initialState = { 
  ufList: [],
  error: null
}

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
      
    default:
      return state;
  };
};
