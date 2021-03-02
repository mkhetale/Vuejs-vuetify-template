import { Cookies } from 'quasar-framework';

class Cookie {
  static getItem(key) {
    return Cookies.get(key);
  }
  static getAll() {
    return Cookies.all();
  }
  static setItem(key, value) {
    return Cookies.set(key, value);
  }
  static remove(key) {
    return Cookies.remove(key);
  }
  static hasItem(key) {
    return Cookies.has(key);
  }
}

export default Cookie;
