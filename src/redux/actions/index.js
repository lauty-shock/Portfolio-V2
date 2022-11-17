export const CHANGE_LENGUAGE = "CHANGE_LENGUAGE";
export const CHANGE_MOOD = "CHANGE_MOOD";

export function changeLenguage(lenguage) {
  return {
    type: CHANGE_LENGUAGE,
    payload: lenguage,
  };
}
export function changeMood(mood) {
  return {
    type: CHANGE_MOOD,
    payload: mood,
  };
}
