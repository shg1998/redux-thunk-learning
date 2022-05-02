import "./styles.css";
import { connect } from "react-redux";
import React, { Component } from "react";
import * as actionCreator from "../../stores/actions/actions";

class CustomComponent extends Component {
  render() {
    return (
      <>
        {this.props.loading ? (
          <h1>loading</h1>
        ) : (
          <h2>
            number value: <span>{this.props.adad}</span>
          </h2>
        )}

        <button onClick={this.props.onAdd}>number UP</button>
        <button onClick={this.props.onMinus}>number Down</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adad: state.number,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch(actionCreator.addNum(1)),
    onMinus: () => dispatch(actionCreator.minusNum(2)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomComponent);
