import api from '../client/api'

/* 
*
*   ----------------------------------------------
*   | METÓDOS PARA GERENCIAR O CANAIS DO USUÁRIO |
*   ----------------------------------------------
*
*/

// BUSCA TODOS OS CANAIS
export const get = api.add(id => ({
    method: 'get',
    url: `/api/perfil/${id}/canal`,
}))

//BUSCA O CANAL DO USUÁRIO
export const add = api.add( (id, { nome, bio, tema } )=> ({
    method: 'post',
    url: `/api/perfil/${id}/canal`,
    data: {
        "nome": nome,
        "bio":  bio,
        "tema": tema,
    }
}))

//APAGA O DADO DE UM PERFIL DESEJADO
export const drop = api.add( id => ({
    method: 'delete',
    url: `/api/perfil/${id}`
}))