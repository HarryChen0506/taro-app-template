import Taro from '@tarojs/taro'
import { isEmpty } from 'voxelcloud-utils';

const DEFAULT_SESSION_NAME = 'token';

const getStorage = () => {
  return {
    get: key => Taro.getStorageSync(key),
    save: (key, value) => Taro.setStorageSync(key, value),
    remove: key => Taro.removeStorageSync(key)
  }
}

class Session {
  sessionName = DEFAULT_SESSION_NAME;

  constructor({ name }) {
    if (name) {
      this.sessionName = name;
    }
  }

  saveToken(data) {
    const storage = getStorage();
    const key = this.sessionName;
    storage.save(key, data);
  }

  getToken() {
    const storage = getStorage();
    const key = this.sessionName;
    const res = storage.get(key);
    return res === null ? '' : res;
  }

  removeToken() {
    const storage = getStorage();
    const key = this.sessionName;
    storage.remove(key);
  }

  save(token) {
    if (!isEmpty(token)) {
      this.saveToken(token);
    }
    return this;
  }

  get() {
    return this.getToken();
  }

  clear() {
    this.removeToken();
    return this;
  }
}

export default Session;