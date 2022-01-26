import {PERSONAL_LOGIN, PERSONAL_INFOS} from "../actions/index";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case PERSONAL_LOGIN:
    return action.state
  case PERSONAL_INFOS:
    return action.state
  default:
    return state;
  }
}

export default reducer;
