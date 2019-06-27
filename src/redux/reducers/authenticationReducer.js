import { LOGIN_SUCCESS,LOGIN_FAILED,REGISTRATION_SUCCESS,REGISTRATION_FAILED} from '../actions/types';

const initialState = {
 
};

const authenticationReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
    case LOGIN_FAILED:
    case REGISTRATION_SUCCESS:
    case REGISTRATION_FAILED:
    default:
      return state;
  }
}

export default authenticationReducer;