import SET_USERS from '../actions/types';

const initialState = {
  userData: {
    data: [],
  },
};

interface State {
  userData: {
    data: Array<any>,
  },
}

const userReducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    case SET_USERS: {
      const { userData } = action.payload;
      const prevData = state.userData.data.length > 0 ? state.userData.data : [];
      const newState = { ...state, userData };
      newState.userData.data = [...prevData, ...newState.userData.data];
      return newState;
    }
    default:
      return state;
  }
};

export default userReducer;
