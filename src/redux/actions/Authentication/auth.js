import axios from 'axios'
//import axios from '../../../axios/index'
import {LOGIN_FAILED,SET_CURRENT_USER} from '../types'
import setAuthToken from '../../../axios/setAuthToken';
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from 'jwt-decode';
const BASE_URL = "http://134.209.24.106/";

export const register = (regData)=>dispatch=>{
   axios.post(`${BASE_URL}v1/rider/register`,regData)
   .then(res=>{
       //console.log('i am ',res);
       const {hasError} = res.data
       if(!hasError){
       const {token } = res.data.data;
       AsyncStorage.setItem('@LoginToken', token)
       .then(__=>{
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
            
       })
      .catch(e=>{
          //console.log(e.response.data)
          dispatch({
              type:REGISTRATION_FAILED,
              payload:e.response.data
          })
       })
      } else{
         // const {message} =res.data.data;
          console.log('i am error message',res.data.errors.message)
          dispatch({
            type:REGISTRATION_FAILED,
            payload: res.data.errors.message
          })
      }
   })
   .catch(error=>{
       console.log(error);
       dispatch({
        type:REGISTRATION_FAILED,
        payload:error
    })
   })
}


export const login = (loginData)=>dispatch=>{
    axios.post(`${BASE_URL}v1/rider/login`,loginData)
    .then(res=>{
        //console.log('i am user',res.data.data);
        const {hasError,data} = res.data
        if(!hasError){
        const {token,user} = data;
        //console.log('i am user',user)
        AsyncStorage.setItem('@LoginToken', token)
        .then(__=>{
         setAuthToken(token);
         const decoded = jwt_decode(token);
         dispatch(setCurrentUser(user));
             
        })
       .catch(e=>{
           //console.log(e.response.data)
           dispatch({
               type:LOGIN_FAILED,
               payload:e.response.data
           })
        })
       } else{
          // const {message} =res.data.data;
           console.log('i am error message',res.data.errors.message)
           dispatch({
             type:LOGIN_FAILED,
             payload: res.data.errors.message
           })
       }
    })
    .catch(error=>{
        console.log(error);
        dispatch({
         type:LOGIN_FAILED,
         payload:error
     })
    })
 }
export const setCurrentUser = (User) =>{
    console.log('i am the decoded value ',User);
    return {
        type: SET_CURRENT_USER,
        payload: {user:true,User:User}
    }
}
/*export const loginUser = userData => dispatch =>{
    AsyncStorage.setItem('@storage_Key', 'stored value')
    axios.post('/api/users/login',userData)
    .then(res => {
         // Save to localStorage
         const {token } = res.data;
         // set tokon to local storage
         localStorage.setItem('jwtToken', token);
         //set token to Auth header
         setAuthToken(token);
         //decode token to get user data
         const decoded = jwt_decode(token);
         dispatch(setCurrentUser(decoded));
    })//ends .then
    .catch(err => {
        dispatch({
            type:GET_ERRORS,
            payload: err.response.data
        })
    })//ends .catch
}
//set Logged in user

export const setCurrentUser = (decoded) =>{
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}
export const logoutUser = ()=> dispatch =>{
//remove token from localStorage
localStorage.removeItem('jwtToken');
setAuthToken(false);
dispatch(setCurrentUser({

}))

}*/