const initState = {
  number: 19,
  loading:false
};

const reducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "ADD_NUM":
      newState.number += action.value;
      newState.loading  = false;
      break;
    case "MINUS_NUM":
      newState.number -= action.value;
      newState.loading  = false;
      break;
    case "LOADING":
      newState.loading  = true;
      break;
  }
  return newState;
};

export default reducer;
