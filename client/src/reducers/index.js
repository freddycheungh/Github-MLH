"use strict";

const loadARComponent = (state={}, action) => {
  switch(action.type) {
    case "AR_COMPONENT":
      return state = { ...state, QRData: action.payload }
    default:
      return state;
  }
}

export default loadARComponent;