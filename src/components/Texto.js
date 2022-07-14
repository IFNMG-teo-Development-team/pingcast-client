import React from 'react'

export default function Text(props) {
    const Conteudo = props.value
    const Tag = props.as || "h1"
    const Classes = props.className

    return (
        <>
            <Tag className={Classes}>{Conteudo}</Tag>
        </>
    )
}