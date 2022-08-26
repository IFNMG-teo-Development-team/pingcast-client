import api from '../client/api'

/* 
*
*   -------------------------------------------------
*   | METÓDOS PARA GERENCIAR OS PODCASTS DO USUÁRIO |
*   -------------------------------------------------
*
*/

// BUSCA O PODCAST DO USUÁRIO
export const add = api.add( (id, form ) => ({
    method: 'post',
    url: `/api/perfil/${id}/canal/podcast`,
    data: [form],
    headers: {'content-type': 'multipart/form-data'}
}))

// PEGA O PODCAST DO USUÁRIO
export const get = api.add( id => ({
    method: 'post',
    url: `/api/podcast/${id}`,
}))