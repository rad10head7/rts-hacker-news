import { ACTIONS } from "../action-constants";

const initialState = {
  list: [],
};

export const historyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_HISTORY_ITEM: {
      let value = action.payload;

      let newState = {
        ...state,
        list: [
          ...state.list,
          {
            text: value,
          },
        ],
      };

      return { ...newState };
    }

    case ACTIONS.CLEAR_HISTORY: {
      return {
        list: [],
      };
    }

    default: {
      return state;
    }
  }
};
