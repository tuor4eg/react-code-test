import SET_USERS from '../actions/types';

const initialState = {
  userData: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      const { userData } = action.payload;
      return {
        ...state,
        userData,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
