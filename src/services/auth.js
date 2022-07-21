export const TOKEN_KEY = "token"; // TOKEN NAME

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

// REALIZA O ARMAZENAMENTO DO LOGIN
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

// EXCLUI O TOKEN DO ARMAZENAMENTO E ASSIM DESLOGA O USUARIO
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  window.location.href = '/'
};