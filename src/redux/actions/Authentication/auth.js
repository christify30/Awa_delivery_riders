import axios from 'axios'
//import axios from '../../../axios/index'
import {LOGIN_FAILED,
    REG_DISPATCH_STATUS,
    SET_CURRENT_USER,REGISTRATION_FAILED,
    REG_PERSONAL_INFOR,
    PAYMENT_DETAILS,
    GET_PROFILE
} from '../types'
import setAuthToken from '../../../axios/setAuthToken';
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from 'jwt-decode';
const BASE_URL = "http://134.209.24.106/";

export const getProfile=()=>dispatch=>{
    axios.post(`${BASE_URL}v1/rider/profile`)
    .then(res=>{
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })
    }).catch(err=>{
        alert('an error occured please ensure your data is turned on');
        console.log(err)
    })
}

export const register = (regData)=>dispatch=>{
   axios.post(`${BASE_URL}v1/rider/register`,regData)
   .then(res=>{
       //console.log('i am ',res);
       const {hasError} = res.data
       if(!hasError){
       const {token } = res.data.data;

        setAuthToken(token);
        AsyncStorage.setItem('@newUser', 'no')
        .then(__=>{console.log('now an old user')}).catch(err=>{console.log(err)})
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
            
       
      
          //console.log(e.response.data)
         
       
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
        payload:"An Error Occured\n please ensure your data is turned on, and\n all fields are correct"
    })
   })
}

export const registerPersonalInformation = (information)=>dispatch=>{
    console.log(information);
    axios.post(`${BASE_URL}v1/rider/register/personal`,information)
    .then(res=>{
        const {hasError} = res.data;

        if(!hasError){
            dispatch({
                type:REG_PERSONAL_INFOR,
                payload:{pi_success:true,error:null}//personal infor success (pi success)
            })
        }
        else{
            dispatch({
                type:REG_PERSONAL_INFOR,
                payload:{pi_success:false, error:res.data.errors.message}
            })
        }
       
        console.log("i am comming from the server-------->",res);
    })
    .catch(e=>{
        dispatch({
            type:REG_PERSONAL_INFOR,
            payload:{pi_success:false,error:"An Error Occured\n please ensure your data is turned on, and\n all fields are correct\n also ensur the image you uploaded are < 2MB"}
        })
       console.log(e);
    })
}

export const registerDispatch = (dispatchData)=>dispatch=>{
   axios.post(`${BASE_URL}/v1/rider/register/dispatch`,dispatchData)
   .then(res=>{
       const {hasError} = res.data;

        if(!hasError){
       dispatch({
            type:REG_DISPATCH_STATUS,
            payload:{di_success:true,error:null}
       })
       }else{
            dispatch({
            type:REG_DISPATCH_STATUS,
            payload:{di_success:false,error:res.data.errors.message}
         })
       }
   })
   .catch(error=>{
       dispatch({
           type:REG_DISPATCH_STATUS,
           payload:{di_success:false,error:"an error occured"}
       })
       console.log(error);
   })
}//ends dispatch registeration

export const registerPaymentDetails=(details)=>dispatch=>{
    axios.post(`${BASE_URL}v1/rider/register/payment`,details)
    .then(res=>{
       const {hasError} = res.data;

        if(!hasError){
       dispatch({
            type:PAYMENT_DETAILS,
            payload:{pay_success:true,error:null}
       })
       }else{
            dispatch({
            type:PAYMENT_DETAILS,
            payload:{pay_success:false,error:res.data.errors.message}
         })
       }
    })
    .catch(e=>{
        console.log(e);
        dispatch({
            type:PAYMENT_DETAILS,
            payload:{pay_success:false,error:'An error occured\n please ensure you are connected to the internet\n or the data you entered are correct.'}
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
        if(user.status=="4"){
        AsyncStorage.setItem('@LoginToken', token)
        .then(__=>{
         AsyncStorage.setItem('@newUser', 'no')
        .then(__=>{console.log('now an old user')}).catch(err=>{console.log(err)})
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
         }else{
            AsyncStorage.setItem('@newUser', 'no')
            .then(__=>{console.log('now an old user')}).catch(err=>{console.log(err)})
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(user));
         }//ends inner if
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
         payload:"An Error Occured\n please ensure your data is turned on, and\n all fields are correct"
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