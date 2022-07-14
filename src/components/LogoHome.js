import React from 'react'

import Image from 'react-bootstrap/Image'
import imagemBG from '../assets/img/spotify.png'

export default function LogoHome(props) {
    let tituloTag = props.value;

    return (
        <>
            {/*<div className='d-flex align-items-center justify-content-around mt-5'>
                <Image src={imagemBG} alt='logo'width="32px" height="32px" />
                <h3 className='ms-2 titulo'>PingCast</h3>
            </div>*/}
            <br />
            <h2 className='mb-3 mt-3 titulo'>{tituloTag}</h2>
        </>
    )
}