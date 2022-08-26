import api from '../client/api'

export const signUp = api.add(({ username, nome, sobrenome, email, senha, sexo, birth }) => ({
  method: 'post',
  url: `/api/perfil`,
  data: {
    "username": username,
    "nome": nome,
    "sobrenome": sobrenome,
    "email": email,
    "senha": senha,
    "sexo": sexo,
    "birth": birth,
  },
}))

export const signIn = api.add(({ email, password }) => ({
  method: 'post',
  url: `/api/login`,
  data: {
    email: email,
    password: password
  },
}))


export const LogOut = () => api.setState(prev => ({}))