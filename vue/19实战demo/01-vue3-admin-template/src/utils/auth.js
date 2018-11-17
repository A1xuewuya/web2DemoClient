import session from "./sessionStorage";

const TokenKey = "ADMIN_TOKEN";
export function getToken() {
  return session.getItem(TokenKey);
}
export function setToken(value) {
  return session.setItem(TokenKey, value);
}
export function removeToken() {
  return session.removeItem(TokenKey);
}
