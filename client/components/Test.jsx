import React, { Component } from "react";
import { connect } from "react-redux";
import { addCount } from "../actions/actions";

const mapStateToProps = (state) => {
  return {
    count: state.mainReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: () => {
      dispatch(addCount());
    },
  };
};

function Test(props) {
  return (
    <>
      <div>Count:{props.count} </div>
      <button onClick={props.addCount}> Add Count</button>
    </>
  );
}

// export default Test;
export default connect(mapStateToProps, mapDispatchToProps)(Test);
