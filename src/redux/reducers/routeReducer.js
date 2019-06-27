import {CURRENT_ROUTE} from '../actions/types'

const initialState = {
    route:'Home'
};

const Routes = (state = initialState, action) => {
  switch(action.type) {
    case CURRENT_ROUTE:
       // console.log(action.payload)
        return {
            route:action.payload
        }
        
    default:
      return state;
  }
}

export default Routes;