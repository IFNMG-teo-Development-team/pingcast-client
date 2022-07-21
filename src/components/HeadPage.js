import React from 'react'
import { Helmet } from 'react-helmet'
import iconeURL from '../assets/img/icone.png'

const HeadPage = (props) => {
    return (
        <>
            <Helmet>
                <title>{`PingCast - ${props.titulo || 'A sua plataforma de Podcasts'}`}</title>
                <meta name="description" content="Plataforma de podcasts de tecnologias, feito com muitas xícaras de café e amor para você" />
                <link rel="icon" href={iconeURL} />
            </Helmet>
        </>
    )
}

export default HeadPage