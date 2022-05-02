import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./states";
import { State } from "./states/reducers";

function App() {
  const dispatch = useDispatch();

  //instead of using mapDispatchToProps in Class Components :)
  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  //instead of using mapStateToProps in Class Components :)
  const bankState = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      {bankState?.loading ? <h1>Loading...</h1> : <h1>{bankState?.value}</h1>}
      <button onClick={() => depositMoney(990)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
      <button onClick={() => bankruptMoney()}>Bankrupt</button>
    </div>
  );
}

export default App;
