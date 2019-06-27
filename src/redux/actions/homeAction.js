import {TEST_REDUCER,GET_CURRENT_LOCATION} from './types'
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