export function setSessionItem(key, value) {
  return sessionStorage.setItem(key, value);
}

export function getSessionItem(key) {
  return sessionStorage.getItem(key);
}

export function removeSessionItem(key) {
  return sessionStorage.removeItem(key);
}

export function clearAllSession() {
  sessionStorage.clear();
}
