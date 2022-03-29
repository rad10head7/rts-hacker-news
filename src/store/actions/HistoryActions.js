import { ACTIONS } from "../action-constants";

const SetSearchHistoryItem = (value) => {
  return {
    type: ACTIONS.SET_SEARCH_HISTORY_ITEM,
    payload: value,
  };
};

const ClearHistory = () => {
  return {
    type: ACTIONS.CLEAR_HISTORY,
  };
};

export const HistoryActions = {
  SetSearchHistoryItem,
  ClearHistory,
};
