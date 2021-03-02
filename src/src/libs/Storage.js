import { LocalStorage } from 'quasar-framework';

class Storage {
  static getItem(key) {
    return LocalStorage.get.item(key);
  }
  static getAll() {
    return LocalStorage.get.all();
  }
  static setItem(key, value) {
    return LocalStorage.set(key, value);
  }
  static remove(key) {
    return LocalStorage.remove(key);
  }
  static hasItem(key) {
    return LocalStorage.has(key);
  }
}

export default Storage;
