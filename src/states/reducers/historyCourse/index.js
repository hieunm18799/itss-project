import { STORE_HISTORY, ADD_HISTORY } from "../../actions/historyCourse/types";

const myState = {
  history: {},
};

const reducers = (state = myState, { payload, type }) => {
  switch (type) {
    case STORE_HISTORY:
      // console.log('store history')
      return {
        ...state,
        history: payload,
      };
    case ADD_HISTORY:
      // console.log(payload)
      let tmpHistory = { ...state.history };
      tmpHistory[payload.lesson]["data"] = tmpHistory[payload.lesson][
        "data"
      ].concat(payload.id);
      console.log("history", tmpHistory);
      return {
        history: tmpHistory,
      };
    default:
      return state;
  }
};

export default reducers;
