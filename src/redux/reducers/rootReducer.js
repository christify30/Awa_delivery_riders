import { combineReducers} from 'redux';
import homeReducer from './homeReducer';
import authenticationReducer from './authenticationReducer';
import routes from './routeReducer';

export default combineReducers({
    home:homeReducer,
    auth:authenticationReducer,
    route:routes
});