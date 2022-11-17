import { CHANGE_LENGUAGE, CHANGE_MODE } from "../actions";

const INITIAL_STATE = {
  lenguage: "ESP",
  mode: "dark",
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_LENGUAGE:
      return {
        ...state,
        lenguage: action.payload,
      };
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
}
