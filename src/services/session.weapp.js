import { Session } from 'voxelcloud-utils';
import Taro from '@tarojs/taro';

const getStorage = () => {
  return {
    get: key => Taro.getStorageSync(key),
    save: (key, value) => Taro.setStorageSync(key, value),
    remove: key => Taro.removeStorageSync(key),
  };
};

const session = new Session({
  name: 'my-token',
  getStorage,
});

export default session;