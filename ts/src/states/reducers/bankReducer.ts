import { ActionType } from "../action-types";
import { Action, BankType } from "../actions";

const initState: BankType = {
  value: 0,
  loading: false,
};

const reducer = (state: BankType = initState, action: Action) => {

  const newState = { ...state };

  switch (action.type) {
    case ActionType.DEPOSIT:
      newState.value += action.payload;
      newState.loading = false;
      break;
    case ActionType.WITHDRAW:
      newState.value -= action.payload;
      newState.loading = false;
      break;
    case ActionType.BANKRUPT:
      newState.value =  0;
      newState.loading = false;
      break;
    case ActionType.LOADING:
      newState.loading = true;
      break;
  }
  return newState;
};

export default reducer;
