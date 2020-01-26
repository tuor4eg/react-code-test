import { INIT_API } from './types';
import ServerApi from '../components/Api';

const host = 'https://reqres.in';

const initAPI = () => (dispatch) => {
  /**
   * Create an instance of HeroAPI class for using by application
   */
  const api = new ServerApi(host);
  try {
    return dispatch({
      type: INIT_API,
      payload: {
        api,
      },
    });
  } catch (error) {
    return error;
  }
};

export default initAPI;
