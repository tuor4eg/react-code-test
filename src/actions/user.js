import SET_USERS from './types';

const getUsers = () => async (dispatch, getState) => {
  /**
   * Request API's method to get userdata json
   */
  const state = getState();
  const userData = await state.api.api.getUserList(1);
  console.log(userData);
  try {
    return dispatch({
      type: SET_USERS,
      payload: {
        userData,
      },
    });
  } catch (error) {
    return error;
  }
};

export default getUsers;
