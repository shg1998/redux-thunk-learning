import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";



export const loading = () : Action=>{
  return {
      type : ActionType.LOADING
  }
}


export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch({
        type: ActionType.DEPOSIT,
        payload: amount,
      });
    }, 1500);
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch({
        type: ActionType.WITHDRAW,
        payload: amount,
      });
    }, 1100);
  };
};

export const bankruptMoney = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch({
        type: ActionType.BANKRUPT,
      });
    }, 2000);
  };
};


