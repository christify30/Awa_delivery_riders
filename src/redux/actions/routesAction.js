import {CURRENT_ROUTE} from './types'

export const currentRoute=(routeName)=>dispatch=>{
    //console.log(routeName)
   dispatch({
       type:CURRENT_ROUTE,
       payload:routeName
   });
}