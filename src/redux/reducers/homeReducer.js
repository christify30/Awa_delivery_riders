import { TEST_REDUCER ,GET_CURRENT_LOCATION} from '../actions/types';

const initialState = {
    message:{},
    curentLocation:{}
};

const authenticationReducer = (state = initialState, action) => {
  switch(action.type) {
    case TEST_REDUCER:
        return {
            ...state,
            message:action.payload
        }

  case GET_CURRENT_LOCATION:
    return {
      ...state,
      curentLocation:action.payload
    }    
    default:
      return state;
  }
}

export default authenticationReducer;