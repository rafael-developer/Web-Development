import React from 'react'

export default function ComParametro(props) {
    const { titulo, subtitulo, nota } = props
    return (
        <div>
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
            <h4> Isso é um inteiro  {nota}</h4>
        </div>
    )
}
/* Usando atributos da propriedade passa por herança */