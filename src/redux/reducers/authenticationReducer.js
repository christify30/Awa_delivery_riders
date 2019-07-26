import { LOGIN_SUCCESS,LOGIN_FAILED,REGISTRATION_SUCCESS,REGISTRATION_FAILED,SET_CURRENT_USER} from '../actions/types';
//import AsyncStorage from '@react-native-community/async-storage';
const initialState = {
 error:{},
 user:false
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
    case SET_CURRENT_USER:
    return {
      ...state,
       user: action.payload.user,
       User:action.payload.User
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