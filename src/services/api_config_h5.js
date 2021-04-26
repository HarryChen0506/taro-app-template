/* eslint-disable */
const MOCK_API = '/mockapi'
const PROD_API = '/api'

const isDevEnv = () => {
  return REACT_APP_ENV === 'dev'
}

const calcApiPrefix = (isProd, isMock) => {
  if (isProd) {
    return PROD_API
  }
  // if (isMock || __MOCK__) {
  //   return MOCK_API
  // }
  return PROD_API
}

export const path = {
  user: {
    login: `${calcApiPrefix()}/pub/v1/backend_login`,
    currentUser: `${calcApiPrefix()}/backend/v1/backend_user`,
  },
  core: {
  },
  common: {
    // ossGetSignature: `${calcApiPrefix()}/pub/v1/oss/get_signature`,
    // uploadFile: 'http://ibrandstar.oss-cn-hangzhou.aliyuncs.com'
  }
}

export const api = {
  name: 'api-config',
  accessTokenHeader: 'access_token',
  PROD_API,
  MOCK_API,
  API: calcApiPrefix(),
  path
}

export default api
