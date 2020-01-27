import { INIT_API } from '../actions/types';

const initialState = {
  api: null,
};

const apiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INIT_API: {
      const { api } = action.payload;
      return {
        ...state,
        api,
      };
    }
    default:
      return state;
  }
};

export default apiReducer;
