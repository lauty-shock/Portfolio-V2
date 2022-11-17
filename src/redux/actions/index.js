export const CHANGE_LENGUAGE = "CHANGE_LENGUAGE";
export const CHANGE_MODE = "CHANGE_MODE";

export function changeLenguage(lenguage) {
  return {
    type: CHANGE_LENGUAGE,
    payload: lenguage,
  };
}
export function changeMode(mode) {
  return {
    type: CHANGE_MODE,
    payload: mode,
  };
}
