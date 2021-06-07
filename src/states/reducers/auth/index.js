import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  SIGN_OUT,
} from "../../../constant/action-types";

const initialState = {
  authenticated: false,
  error: false,
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, authenticated: true, error: false };

    case AUTH_ERROR:
      return { ...state, error: true };

    case SIGN_OUT:
      return initialState;

    default:
      return state;
  }
};

export default auth;
