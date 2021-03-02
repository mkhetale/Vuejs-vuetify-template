import { Message } from 'element-ui';

class Notify {
  static success(msg) {
    Message.success(msg);
  }
  static error(msg) {
    Message.error(msg);
  }
  static warning(msg) {
    Message.warning(msg);
  }
  static info(msg) {
    Message.info(msg);
  }
}

export default Notify;
