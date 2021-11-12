import { Voxios, voxiosDefaultConfig as defaultConfig } from 'voxelcloud-utils';
import session from '@/services/session'
// import { logout, onThrowError } from '@/services/system';

// const STATUS_CODE = 'status';
const ERROR_CODE = 'code';

const request = new Voxios()
  .setConfig({
    ...defaultConfig,
    addHeader: () => {
      return {
        token: session.get(),
      }
    },
    isSuccess: (response) => {
      const { status, data } = response;
      if (status === 200 && data?.code == 200) {
        return true;
      }
      return false;
    },
    getErrorCode: (response) => {
      const { data = {} } = response;
      return data[ERROR_CODE];
    },
  })
  .addModule('logout', () => {
    // logout();
  })
  .addModule('onThrowError', (...args) => {
    // onThrowError(...args);
  })
  .getInstance();

export default request;