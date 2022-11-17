import { CHANGE_LENGUAGE, CHANGE_MOOD } from "../actions";

const INITIAL_STATE = {
  lenguage: "ESP",
  mood: "dark",
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_LENGUAGE:
      return {
        ...state,
        lenguage: action.payload,
      };
    case CHANGE_MOOD:
      return {
        ...state,
        mood: action.payload,
      };
    default:
      return state;
  }
}
