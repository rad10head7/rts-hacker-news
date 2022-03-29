import { HistoryActions } from "./HistoryActions";

export const SetHistoryItem = (item) => {
  return (dispatch, getState) => {
    try {
      console.log(item, getState());

      dispatch(HistoryActions.SetSearchHistoryItem(item));
    } catch (error) {
      console.log("Error", error);
    }
  };
};

export const ClearAllHistory = () => {
  return (dispatch, getState) => {
    try {
      console.log(getState());

      dispatch(HistoryActions.ClearHistory());
    } catch (error) {
      console.log("Error", error);
    }
  };
};
