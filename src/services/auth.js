export const TOKEN_KEY = "token"; // TOKEN NAME

export const ID_KEY = "id"; // TOKEN NAME

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getUserId = () => localStorage.getItem(ID_KEY);

// REALIZA O ARMAZENAMENTO DO LOGIN
export const login = (token,id) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(ID_KEY, id);
};

// EXCLUI O TOKEN DO ARMAZENAMENTO E ASSIM DESLOGA O USUARIO
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ID_KEY);
  window.location.href = '/'
};