import { Voxios, voxiosDefaultConfig } from '@/vc-util';
// import { logout, onThrowError } from '@/services/system';

// const STATUS_CODE = 'status';
const ERROR_CODE = 'error_code';

const request = new Voxios()
  .setConfig({
    ...voxiosDefaultConfig,
    isSuccess: (response) => {
      const { status } = response;
      if (status === 200) {
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

export {
  request,
};

export default request;