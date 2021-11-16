// import { PILL_TAKEN } from '../actions';

import { SET_FORM, SET_FORM_PROFESSIONAL } from '../actions/action';

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_FORM:
    return { ...state, state_personal: action.state };
  case SET_FORM_PROFESSIONAL:
    return { ...state, state_professional: action.state };
  default:
    return state;
  }
};

export default reducer;
