import { INIT_API } from './types';
import ServerApi from '../components/Api';

const host = 'https://reqres.in';

const initAPI = () => (dispatch: any) => {
  /**
   * Create an instance of ServerAPI class for using by application
   */
  const api = new ServerApi(host);
  return dispatch({
    type: INIT_API,
    payload: {
      api,
    },
  });
};

export default initAPI;
