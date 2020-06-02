import React from 'react'
import './Card.css'

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children} {/* renderiza todos os componentes filhos */}
            </div>
        </div>
    )
}
/* Cria um componente do tipo card que tem título e conteúdo */