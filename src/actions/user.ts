import SET_USERS from './types';

const getUsers = () => async (dispatch: any, getState: any) => {
  /**
   * Request API's method to get userdata json
   */
  const state = getState();
  const page = state.users.userData.page ? state.users.userData.page + 1 : 1;
  const userData = await state.api.api.getUserList(page);
  return dispatch({
    type: SET_USERS,
    payload: {
      userData,
    },
  });
};

export default getUsers;
