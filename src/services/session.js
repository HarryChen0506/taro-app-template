import { Session } from '@/vc-util';

const session = new Session()
  .config({
    token: 'token',
    authHeader: 'header-token'
  });

export default session;