import axios from 'axios';
import Message from '@/libs/Message';

const instance = axios.create();
/* Response Interceptor to redirect to login */
instance.interceptors.response.use(response => response,
  /* eslint-disable brace-style no-undef */
(error) => {
  if (error.response.status === 401 && error.response.data === 'Unauthorized') {
    Message.error('Your session has expired. You would be redirected to the login page');
    const redirect = window.location.pathname;
    window.location = `/login?redirect=${redirect}`;
  } else {
    /* eslint-disable no-undef */
    return Promise.reject(error);
  }
  return true;
});
class Request {
  static get(url, options = {}) {
    return instance.get(url, options);
  }
  static post(url, data, options = {}) {
    return instance.post(url, data, options);
  }
  static put(url, data, options = {}) {
    return instance.put(url, data, options);
  }
  static delete(url, options = {}) {
    return instance.delete(url, options);
  }
}

export default Request;
