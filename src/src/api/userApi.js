import Request from '@/libs/Request';
import Auth from '@/libs/Auth';

// eslint-disable-next-line no-undef
const api = `${API_URL}/user`;
class UsersApi {
  static getAll(params) {
    const headers = Auth.getHeader();
    const config = {
      params,
      headers,
    };
    return Request.get(`${api}`, config);
  }
  static search(params) {
    const headers = Auth.getHeader();
    const config = {
      params,
      headers,
    };
    return Request.get(`${api}/search`, config);
  }
  static get(id) {
    const headers = Auth.getHeader();
    const config = {
      headers,
    };
    return Request.get(`${api}/${id}`, config);
  }
  static create(obj) {
    const headers = Auth.getHeader();
    const config = {
      headers,
    };
    return Request.post(`${api}`, obj, config);
  }
  static edit(obj, id) {
    const headers = Auth.getHeader();
    const config = {
      headers,
    };
    return Request.put(`${api}/${id}`, obj, config);
  }
  static login(obj) {
    return Request.post(`${api}/login`, obj);
  }
  static delete(id) {
    const headers = Auth.getHeader();
    const config = {
      headers,
    };
    return Request.delete(`${api}/${id}`, config);
  }
}
export default UsersApi;
