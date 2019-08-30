import { LOGIN_SUCCESS,
  LOGIN_FAILED,
  REG_DISPATCH_STATUS,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  SET_CURRENT_USER,
  REG_PERSONAL_INFOR,
  PAYMENT_DETAILS,
  GET_PROFILE
} from '../actions/types';
//import AsyncStorage from '@react-native-community/async-storage';
const initialState = {
 error:{},
 user:false,
 User:{},
 infor:{}
};
/*const storeData = async (token) => {
  try {
     data =   await AsyncStorage.setItem('@storage_Key', token);
     return data;
  } catch (e) {
    console.log(e)
    return null
  }
}*/

const authenticationReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
    case LOGIN_FAILED:
        return {
          ...state,
           error:action.payload,
           user:false
        }
    case GET_PROFILE:
      return {
        ...state,
        profile:action.payload
      }
    case SET_CURRENT_USER:
    return {
      ...state,
       user: action.payload.user,
       User:action.payload.User
    }
  case  REG_PERSONAL_INFOR:
     return {
       ...state,
       infor:action.payload
     }
  case REG_DISPATCH_STATUS:
  return {
    ...state,
    disp:action.payload
  }
  case PAYMENT_DETAILS:
  return {
    ...state,
    pay:action.payload
  }
    case REGISTRATION_FAILED:
      
        return {
          ...state,
           error:action.payload,
           user:false
        }
    default:
      return {
        ...state
       
      };
  }
}

export default authenticationReducer;