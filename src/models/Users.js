import api from '../client/api'

/* 
*
*   -------------------------------------------
*   | METÓDOS PARA BUSCAR OS DADOS DO USUÁRIO |
*   -------------------------------------------
*
*/

// BUSCA TODOS OS USUÁRIOS
export const all = api.add(() => ({
    method: 'get',
    url: `/api/perfil`
}))

//BUSCA O DADO DE UM PERFIL DESEJADO
export const get = api.add( id => ({
    method: 'get',
    url: `/api/perfil/${id}`
}))

//APAGA O DADO DE UM PERFIL DESEJADO
export const drop = api.add( id => ({
    method: 'delete',
    url: `/api/perfil/${id}`
}))