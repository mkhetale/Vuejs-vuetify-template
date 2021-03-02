import Storage from '@/libs/Storage';

class Auth {
  static hasToken() {
    return Storage.hasItem('token');
  }
  static getToken() {
    return Storage.getItem('token');
  }
  static setToken(value) {
    return Storage.setItem('token', value);
  }
  static removeToken() {
    return Storage.remove('token');
  }
  static getHeader() {
    const token = this.getToken();
    return {
      Authorization: `JWT ${token}`,
    };
  }
}

export default Auth;
