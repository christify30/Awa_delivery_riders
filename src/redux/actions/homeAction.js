import {TEST_REDUCER,GET_CURRENT_LOCATION} from './types'
import axios from 'axios';

const BASE_URL = "http://134.209.24.106/";

export const getName=()=>dispatch=>{
   dispatch({
       type:TEST_REDUCER,
       payload:'hello i am working'
   })
}
export const test=()=>dispatch=>{
    dispatch({
        type:TEST_REDUCER,
        payload:'testing'
    })
}

export  const getCurrentPosition =() => dispatch => {
    navigator.geolocation.getCurrentPosition(position=>{
         dispatch({
           type:GET_CURRENT_LOCATION,
           payload:position
         });
     },err=>{console.log(err)});

}

export const riderStatus=(coordinates)=>dispatch=>{
    axios.post(`${BASE_URL}v1/rider/rider-status`,coordinates)
    .then(res=>{
        
    })
}