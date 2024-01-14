
import { AuthActionTypes, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';

interface AuthState {
  loading: boolean;
  error: string;
}

const initialState: AuthState = {
  loading: false,
  error: '',
};

const loginReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: '' };
    case LOGIN_SUCCESS:
      return { ...state, loading: false };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
