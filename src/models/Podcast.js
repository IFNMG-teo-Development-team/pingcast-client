import api from '../client/api'

/* 
*
*   -------------------------------------------------
*   | METÓDOS PARA GERENCIAR OS PODCASTS DO USUÁRIO |
*   -------------------------------------------------
*
*/

//BUSCA O CANAL DO USUÁRIO
export const add = api.add( (form ) => ({
    method: 'post',
    url: `/api/perfil/${'6'}/canal/podcast`,
    data: [form],
    headers: {'content-type': 'multipart/form-data'}
}))
