import * as axios from 'axios';

var instance = axios.create();
instance.defaults.baseURL = 'http://134.209.24.106';
axios.defaults.headers.post['Content-Type'] = 'application/json';
//instance.defaults.timeout = 20000;]
//...
//and other options

export { instance as default };